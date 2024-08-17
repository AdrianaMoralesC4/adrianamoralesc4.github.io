const express = require('express')

const router = express.Router()

router.get('/', function(req, res){
    return new Promise( (resolve, reject) => {
        try{
            resolve()
        }catch(error){
            reject
        }
    })
})