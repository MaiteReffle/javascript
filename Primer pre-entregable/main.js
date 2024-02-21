// Calculadora de semanas de embarazo

//Pedir datos
alert('Ingrese sus datos')
let nombre = prompt('Introduzca su nombre')
let apellido = prompt('Introduzca su apellido')
let edad = prompt('Introduzca su edad')
let fechaUltimaMenstruacion = prompt('Introduzca la fecha de su última menstruación en formato YYYY-MM-DD')
let fechaUltimaMenstruacion2 = new Date (fechaUltimaMenstruacion) //Convertir a fecha

//Calcular fecha actual
let tiempoTranscurrido = Date.now() 
let hoy = new Date (tiempoTranscurrido)
let embarazada = false
let nombreBebe

console.log('Inició programa de trackeo de embarazo')
console.log(hoy)
//Función para calcular semanas de embarazo
function semanasEmbarazo (fecha1,fecha2) {
    //Calcular semanas
    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000
    diferencia /= (60 * 60 * 24 * 7)
    let diferenciaRedondeada = Math.round(diferencia)

    //Devolver resultado
    if (diferenciaRedondeada < 0) {
        console.log('Su fecha de última menstruación no puede ser mayor a la fecha actual')
    } else if (diferenciaRedondeada < 2){
        console.log('Aún es muy pronto para que esté embarazada!')
    } else {
        embarazada = true
        console.log('Felicidades! ' + nombre + ' ' + apellido + ' usted podría estar de ' + diferenciaRedondeada + ' semanas de embarazo :). Confírmelo con una prueba de embarazo.')
    }
}

//Funcion para guardar nombres de bebés en favoritos
function guardarNombresEnFavoritos () {
    let contador = 0
        if (embarazada = true) {
        pedirNombre = true
                while (pedirNombre) {
            let nombreBebe=prompt('Ingrese un nombre para guardar en favoritos') //cómo hago para guardar estos nombres en una base de datos y que no se sobreescriba? se puede crear un array?
            console.log('Se guardó el nombre ' + nombreBebe + ' en favoritos')
            contador ++
        if (prompt('Desea seguir agregando nombres? Conteste "si" o "no"').toLowerCase() == 'no') {
            pedirNombre = false
        }
        }
    }
    console.log(nombre + " " + apellido + ' guardó ' + contador + ' nombres en favoritos')
}

// Llamar a la funciones
semanasEmbarazo (fechaUltimaMenstruacion2,hoy)
guardarNombresEnFavoritos ()
console.log('Fin del programa')