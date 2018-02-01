'use strict'

const express = require('express')
const personaCtrl = require('../controllers/persona')
const userCtrl = require('../controllers/user')
const api = express.Router()
const auth = require('../middlewares/auth')


api.get('/persona', personaCtrl.getPersones)
api.get('/persona/:idPersona', personaCtrl.getPersona)
api.post('/persona',auth, personaCtrl.createPersona)
api.put('/persona/:idPersona', auth, personaCtrl.updatePersona)
api.delete('/persona/:idPersona',auth,  personaCtrl.deletePersona)

api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)

api.get('/private',auth, function(req,res){
  res.status(200).send({message:'tens acces'})
})


module.exports = api
