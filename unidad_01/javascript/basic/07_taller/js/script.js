var div_cajita = document.getElementById("cajita")
var  id = null
var pos = 0

function mover(){
    clearInterval(id)
    id = setInterval(frame, 5)
    // El setInterval es para que se repita varias veces

}

function frame(){
    if (pos == 350) {
        clearInterval(id)
    }else{
        pos++
        div_cajita.style.top = pos + "px"  /* si solo queda este codigo la bolita se moveria a la derecha */
        div_cajita.style.left = pos + "px"  /* si solo queda este codigo la bolita se moveria hacia abajo */
    }

}