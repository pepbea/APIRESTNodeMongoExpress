'use strict'

const  mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../service')

function signUp(req,res){
  const user = new User({
    email:req.body.email,
    user:req.body.user,
    password:req.body.password
  })
  user.save(function(err){
    if(err)res.status(500).send({message:`Error al crear usuari ${err}`})
    return res.status(201).send({token:service.createToken(user)})
  })
}


function signIn(req,res){

  User.find({email:req.body.email}, (err,usuari)=>{
    if(err)return res.status(500).send({message:err})
    if(!usuari)return res.status(404).send({message:'No existeix usuari'})

    req.user = usuari
    res.status(200).send({
      message:'T\'has loguinejat correctament',
      token: service.createToken(usuari)
    })
  })

}

module.exports = {
  signUp,
  signIn
}
