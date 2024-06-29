// Se utiliza el 'var' para definir
const URL = "https://www.ups.edu.ec"
var texto = "Programacion y Plataformas Web"
// let texto2 = "Adriana" ESTO SÍ

function imprimir_01(){
    let texto2 = "Adriana"
    // Esto no se debe hacer
    var texto3 = "Morales"


    console.log(texto)
    console.log(texto2)
    console.log(texto3)

    //NO SE PUEDE CAMBIAR A UNA CONSTANTE
    // URL = "https://www.ups.edu.ec/home"

    // console.log(URL)
}

function imprimir_02(){
    console.log(texto)
    // texto2 no existe en esta funcion
    console.log(texto2)
    // texto3 no existe en esta funcion
    console.log(texto3)

}

imprimir_01()
// imprimir_02()