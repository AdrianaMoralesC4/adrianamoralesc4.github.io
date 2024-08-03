// Tipos de funciones

//funciones declarativa
function imprimir(){
    console.log('Hola Mundo')
}

//Fucion expresiva o tambien conocidad como anonima
const suma = function(a,b){
    return(a + b)
}

console.log(suma(10, 20))

//Funcion flecha
const suma2 = (a, b) => {
    let total = a + b
    console.log(`La suma de ${a} y ${b} es ${total}`)
}

suma2(100,200)

//se puede realizarlo en una sola linea
const suma3 = (a, b) => a + b

console.log(suma(110, 220))
