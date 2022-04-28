//const text  = require('./funcion.js')

import text from './funcion.js'
//let path = require('path')
let main = document.querySelector('main')
let subtitulo = document.querySelector('.subtitulo')
var elementosH2 = document.querySelectorAll('h2')
let elementoA = document.querySelector('a')
let elementosP = document.querySelectorAll('p')

text(subtitulo)


let respuestaConfirm = confirm('Desea colocar un fondo de pantalla?')
if(respuestaConfirm){
    document.querySelector('body').classList.add('fondo')
}

for (let i = 0; i < elementosP.length; i++) {
    if(i%2==0){
        elementosP[i].classList.add('destacadoPar')
    }
    else{
        elementosP[i].classList.add('destacadoImpar')
    }
    
}

main.style.display='block'

elementoA.style.color='#E51B3E'




