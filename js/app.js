class App {
    constructor() {
        this.usuarios = []
        this.usuario_actual 
    }
    ingresar_usuario () {
        alert('Ingrese sus datos')
        let usuario = prompt('Ingrese su nombre de usuario')
        let nombre = prompt('Introduzca su nombre')
        let apellido = prompt('Introduzca su apellido')
        let edad = prompt('Introduzca su edad')
        let fechaUltimaMenstruacion = new Date (prompt('Introduzca la fecha de su última menstruación en formato YYYY-MM-DD','YYYY-MM-DD'))

        this.usuarios.push(new Usuario(usuario,nombre,apellido,edad,fechaUltimaMenstruacion))
        this.usuario_actual = app.usuarios.find((elm)=> elm.usuario == usuario) //Cuando crean un usuario, ya los dejo logueados como usuario actual
    }

    semanas_embarazo () { //Calcular semanas de embarazo
        let tiempoTranscurrido = Date.now() 
        let hoy = new Date (tiempoTranscurrido)
        let diferencia = (hoy.getTime() - this.usuario_actual.fechaUltimaMenstruacion.getTime()) / 1000
        diferencia /= (60 * 60 * 24 * 7)
        this.usuario_actual.semanasDeEmbarazo = Math.round(diferencia)
    
        //Devolver resultado
        if (this.usuario_actual.semanasDeEmbarazo < 0) {
            console.log('Su fecha de última menstruación no puede ser mayor a la fecha actual')
        } else if (this.usuario_actual.semanasDeEmbarazo < 2){
            console.log('Aún es muy pronto para que esté embarazada!')
        } else {
            console.log('Felicidades! ' + this.usuario_actual.nombre + ' ' + this.usuario_actual.apellido + ' usted podría estar de ' + this.usuario_actual.semanasDeEmbarazo + ' semanas de embarazo :). Confírmelo con una prueba de embarazo.')
            this.usuario_actual.embarazada = true
        }
    }

    guardar_nombres_favoritos () { //Guardar nombres en favoritos
        if (this.usuario_actual.embarazada == true && confirm('Desde agregar nombres en favoritos?')) {
            while (true) {
                let nombreBebe=prompt('Ingrese un nombre para guardar en favoritos')
                let agregar = true

                if (this.usuario_actual.nombresBebeLower.some((elm) => elm == nombreBebe.toLowerCase())) {  //Método some para ver si el nombre ya está en favoritos
                    console.log('El nombre ' + nombreBebe + ' ya está en favoritos')
                    agregar = false
                }

                if (agregar == true) {
                    this.usuario_actual.nombresBebe.push(nombreBebe)
                    console.log('Se guardó el nombre ' + nombreBebe + ' en favoritos')
                    this.usuario_actual.nombresBebeLower = this.usuario_actual.nombresBebe.map((elm) => elm.toLowerCase()) //Método map para guardar los nombres en favoritos pero en lower case
                }
                if (!confirm('Desea seguir agregando nombres?')) {
                    break
                }
            }
        }
        if (this.usuario_actual.nombresBebe.length > 0) {
            console.log(this.usuario_actual.nombre + ' '  + this.usuario_actual.apellido + ' guardó ' + this.usuario_actual.nombresBebe.length + ' nombres en favoritos')
            console.log('Los nombres guardados en favoritos son ' + this.usuario_actual.nombresBebe.join(', '))
        } else {
            console.log(this.usuario_actual.nombre + ' '  + this.usuario_actual.apellido + ' no guardó ningún nombre en favoritos')
        }
    }
    eliminar_nombre_favoritos () {
        if (this.usuario_actual.embarazada == true && this.usuario_actual.nombresBebe.length > 0) {
            while (true) {
                alert('Los nombres guardados en favoritos son ' + this.usuario_actual.nombresBebe.join(', '))
                var nombreEliminar = prompt('Qué nombre desea eliminar?')

                this.usuario_actual.nombresBebeLower.forEach ((elm) => {
                    if (elm == nombreEliminar.toLowerCase()) {
                        let pos_eliminar =  this.usuario_actual.nombresBebeLower.indexOf(nombreEliminar.toLowerCase())
                        console.log('Se eliminará el nombre ' + this.usuario_actual.nombresBebe[pos_eliminar])
                        this.usuario_actual.nombresBebe.splice(pos_eliminar, 1)
                        console.log('Los nombres guardados en favoritos son ' + this.usuario_actual.nombresBebe.join(', '))
                    }
                })

                if (!confirm('Desea seguir eliminando nombres?')) {
                    break
                }
            }
        } else if (this.usuario_actual.embarazada == true && this.usuario_actual.nombresBebe.length == 0) {
            alert('No hay ningún nombre en favoritos')
        }
    }


    // Función flecha para agregar un nuevo registro de peso
    agregar_peso = () => {
        let fecha=prompt('Ingrese la fecha de pesaje','YYYY-MM-DD')
        let peso=prompt('Ingrese el peso en kg')
        if (isNaN(peso)) {
            console.log('El peso ingresado no es un número')
        } else { 
            this.usuario_actual.registrosDePeso.push({ fecha: fecha, peso: peso })
        }
    }
    // Función para calcular el peso promedio con función anónimia
    calcular_peso_promedio() {
        if (this.usuario_actual.registrosDePeso.length > 1) {
            let totalPeso = this.usuario_actual.registrosDePeso.reduce((acc,elm) => acc + Number(elm.peso), 0)  //Paso una función flecha anónima como parámetro que suma todos los pesos y los agrega en la variable totalpeso
            this.usuario_actual.pesoPromedio = totalPeso / this.usuario_actual.registrosDePeso.length
            console.log('El peso promedio es: ' + pesoPromedio.toFixed(2) + ' kg')
        }
    }
}