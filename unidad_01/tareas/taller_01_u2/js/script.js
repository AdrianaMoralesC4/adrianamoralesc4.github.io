
function cargar_Imagen(){
    var imagen = document.getElementById("imagen")
    var box_imagen = document.getElementById("box-imagen")
    box_imagen.style.backgroundColor = "#fff"
    box_imagen.style.border = "#fff"
    imagen.style.display = "block"
}

function eliminar_Imagen(){
    var imagen = document.getElementById("imagen")
    var box_imagen = document.getElementById("box-imagen")
    box_imagen.style.backgroundColor = "#e49836"
    box_imagen.style.border = "#d88f2f"
    imagen.style.display = "none"
}