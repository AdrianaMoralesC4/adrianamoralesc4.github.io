function agregar_receta(){
    var container = document.getElementById("container")
    var nreceta = document.getElementById("nreceta")
    var dreceta = document.getElementById("dreceta")

    var div = document.createElement("div")
    div.className = "recetas"

    var li = document.createElement("li")
    li.className = "li"
    var ul = document.createElement("ul")
    ul.className = "ul"


    var nreceta = document.createTextNode(nreceta.value)
    var dreceta = document.createTextNode(dreceta.value)

    var titulo = li.appendChild(nreceta)
    var descrip = ul.appendChild(dreceta)


    div.appendChild(titulo)
    div.appendChild(descrip)

    container.appendChild(div)
}
