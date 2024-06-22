var contador = 1

function cargar_elemento(){
    var content = document.getElementById("content")

    var div = document.createElement("div")
    div.className = "item-ox"
    var texto = document.createTextNode("Item " + contador)
    contador++
    div.appendChild(texto)

    content.appendChild(div)
}