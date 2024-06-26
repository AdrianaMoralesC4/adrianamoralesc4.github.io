function seleccionar_opcion(opcion){
    var opcion_1 = document.getElementById("opcion_01")
    var opcion_2 = document.getElementById("opcion_02")
    var imagen01 = document.getElementById("imagen01")
    var imagen02 = document.getElementById("imagen02")

    if (opcion == 1) {
        opcion_1.style.zIndex = 2
        opcion_2.style.zIndex = 1
        imagen01.style.zIndex = 2
        imagen02.style.zIndex = 1
        
    } else if (opcion == 2) {
        opcion_1.style.zIndex = 1
        opcion_2.style.zIndex = 2
        imagen02.style.zIndex = 2
        imagen01.style.zIndex = 1

    }
}