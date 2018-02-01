'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonaSchema = Schema({
  nom: String,
  dni: String,
  edat: {type:Number,default:30},
  dataNaixament: Date,
  genere: {type:String, enum:['home','dona']},
  professio:{type:String, enum:['professor','metge','bomber']}
})

module.exports = mongoose.model('Persona',PersonaSchema)
