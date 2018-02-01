'use strict'
const Persona = require('../models/persona')

function getPersona(req,res){
    let idPersona = req.params.idPersona
    Persona.findById(idPersona, (err, persona)=>{
      if(err)res.status(500).send({message:`S\'ha produit un error: ${err}`})
      if(!persona)res.status(404).send({message:`No existeix persona amb aquest id`})
      res.status(200).send({persona})
    })
}

function getPersones(req,res){
  Persona.find({},(err, persones)=>{
    if(err)res.status(500).send({message:`S\'ha produit un error: ${err}`})
    if(!persones)res.status(404).send({message:`No existeix persona amb aquest id`})
    res.status(200).send({persones})
  })
}

function createPersona(req,res){
  console.log('POST /api/persona')
  console.log(req.body)

  const persona = new Persona()
  persona.nom = req.body.nom
  persona.dni = req.body.dni
  persona.dataNaixament = req.body.dataNaixament
  persona.edat = req.body.edat
  persona.professio = req.body.professio
  persona.genere = req.body.genere

  persona.save((err,personaStored)=>{
      if(err) res.status(500).send({message:`Error al gravar a la base de dades ${err}`})

      res.status(200).send({persona:personaStored})
      console.log(`Mostra el parametre id de la nova persona: ${personaStored._id}`)
  })
}

function updatePersona(req,res){
  let idPersona = req.params.idPersona
  let update = req.body
  Persona.findByIdAndUpdate(idPersona,update,(err,persona)=>{
    if(err)res.status(500).send({message:`S\'ha produit un error al fer update persona: ${err}`})
    res.status(200).send({persona})
  })
}

function deletePersona(req,res){
  let idPersona = req.params.idPersona
  Persona.findById(idPersona, (err,persona)=>{
    if(err)res.status(500).send({message:`S\'ha produit un error al borrar persona: ${err}`})

    persona.remove( err => {
      if(err)res.status(500).send({message:`S\'ha produit un error al borrar persona: ${err}`})
      res.status(200).send({message:`Persona borrada correctament`})
    })
  })
}


module.exports =  {
  getPersona,
  getPersones,
  createPersona,
  updatePersona,
  deletePersona
}
