// FUNCIONES TIPO CALLBACKS
// CONEXION ENTRE EL CLIENTE Y EL SERVIDOR
// AJAX = Asynchronous Javascript and XML

const URL = 'https://rickandmortyapi.com/api/character/'
var xhttp = null

const publicKey = "ea1bd"
const privateKey = ""

// Generar ts
var ts = new Date().getTime().toString()
// Generar hash md5
var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()

var params = {
    ts: ts,
    apiKey: publicKey,
    hash: hash,
    limit: 10 // Por ejemplo, obtener los primeros 10 personajes
}

function conectar(personaje){
    xhttp = new XMLHttpRequest() 
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL + '?' + params.toString, true)
    xhttp.send()
}

function obtener_respuesta(){
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            let dato = JSON.parse(xhttp.responseText)
            console.log(dato)

            /*let container = document.getElementById('container')
            let personaje =  `<div class="container-item"><h1>${dato.name}</h1>
            <img src="${dato.image}" /><div class="container-item">`
            container.innerHTML = personaje*/
        }
    }
}