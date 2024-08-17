const express = require('express')

const controller = require('./controller')

const router = express.Router()

router.post('/',function(req, res){
    controller.insertar_usuario(req.body)
        .then((data) => {})
        .catch( (error) => {})
})

router.get('/', function(req, res){
    controller.obtener_usuario(req.body)
        .then((data) => {})
        .catch( (error) => {})
})

module.exports = router

// router.get('/', function(req, res){
//     return new Promise( (resolve, reject) => {
//         try{
//             resolve()
//         }catch(error){
//             reject
//         }
//     })
// })