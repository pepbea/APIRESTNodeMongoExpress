'use strict'
const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

mongoose.connect(config.db,(err,res)=>{
    if(err) {
        console.log(`Error al connectar amb la base de dades: ${err}`)
    }
    console.log('S\'ha establert connexió amb la base de dades.')

    app.listen(config.port, () => {
      console.log(`API REST corrent localhost port: ${config.port}`)
    })
})
