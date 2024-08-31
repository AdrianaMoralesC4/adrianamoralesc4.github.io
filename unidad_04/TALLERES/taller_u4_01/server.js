const express = require('express')
const body_parser = require('body-parser')
const path = require('path')
var app = express()
const config = require('./config')
const routes = require('./network/routes')

const db = require('./db')



db( config.DB_URL )

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended:false}) )

routes( app )

app.listen( config.PORT )
console.log(`La aplicacion se encuentra arriba en http://localhost:${config.PORT}`)