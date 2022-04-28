export default function text (subtitulo){

    let respuesta = prompt('Ingrese su nombre')

    if (!respuesta){
    subtitulo.innerHTML += 'Invitado'
    subtitulo.style.textTransform='uppercase' // textTransform 
    //document.querySelector('.subtitulo').innerHTML += 'Invitado'
    }else{
    subtitulo.innerHTML += respuesta
    //const selectorH2 = document.querySelector('.subtitulo').innerHTML += respuesta;
    subtitulo.style.textTransform='uppercase'
    }
}



    




