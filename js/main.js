// Calculadora de semanas de embarazo
console.log('Inició programa de trackeo de embarazo')
let app = new App()

while (true) { //Bucle
    let opc = pedir_num('Bienvenido! \n1. Loguearse \n2. Agregar nombres a favoritos \n3. Eliminar nombres de favoritos \n4. Registrar peso \n0. Salir',4)
    if (opc == 1) {
        let usuario = prompt('Ingrese su nombre de usuario')
        usuario_activo = app.usuarios.find((elm)=> elm.usuario == usuario) //Me fijo si el nombre ya existe en favoritos
        if (usuario_activo == undefined) { //Si no existe, le pregunto si lo quiere crear
            if(confirm(usuario + ' no existe. Desea registrarse?')) {
                app.ingresar_usuario () //Crea usuario
                app.semanas_embarazo () //Le calcula las semanas de embarazo a ese usuario
            }
        } else { //Si el usuario ya existía, lo defino como usuario actual
            this.usuario_actual = app.usuarios.find((elm)=> elm.usuario == usuario_activo)
            if (confirm('Su fecha de última menstruación es '+ app.usuario_actual.fechaUltimaMenstruacion + ' desea modificarla?' )) { //Le pido que valide su FUM, para saber si cambió desde la última vez que entró
                this.usuario_actual.fechaUltimaMenstruacion = new Date (prompt('Introduzca la fecha de su última menstruación en formato YYYY-MM-DD','YYYY-MM-DD'))
            }
            app.semanas_embarazo () //Le calculo las semanas de embarazo
        }
    }
    if (opc == 2) { 
        if (app.usuario_actual != undefined) { // Necesito verificar que esté logueado
            app.guardar_nombres_favoritos() //Llamo a la función 
        } else {
            alert('Por favor loguéese')
        }
    }
    if (opc == 3) { 
        if (app.usuario_actual != undefined) { // Necesito verificar que esté logueado
            app.eliminar_nombre_favoritos() //Llamo a la función 
        } else {
            alert('Por favor loguéese')
        }
    }
    if (opc == 4) { 
        if (app.usuario_actual != undefined) { // Necesito verificar que esté logueado
            app.agregar_peso() //Llamo a la función
            app.calcular_peso_promedio()
        } else {
            alert('Por favor loguéese')
        }
    }
    if (opc == 0) {
        break
    }
}

function pedir_num(str, max) {
    let num = Number(prompt(str))  
    // Checkeamos que lo ingresado por el usuario sea valido (que sea un entero + no sea NaN + no se pase del max)
    while (!Number.isInteger(num) || isNaN(num) || (num < 0 || num > max)) {
        num = Number(prompt(str))
    }
    return num
}

//Fin del programa
console.log('Fin del programa')