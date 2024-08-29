/* function saludar() {
    console.log("Bienvenidos a TP2!")
}

saludar() */


// ------------------------------------------------------------------


const a = "0"
const b = 0

/* // IGUALDAD: comparacion del valor
console.log(a == b)
// IGUALDAD ESTRICTA: comparacion de valor y tipo de dato
console.log(a === b) */


// ------------------------------------------------------------------


//Objetos
//clave(propiedades)-valor
const estudiante = {
    nombre: "Juan Pablo",
    nota: 10,
    email: "juanpablolopez@gmail.com",
    telefono: 112000259698633
  }

//  console.log('Estudiante: ', estudiante)

//  Agregar propiedades
  console.log("Propiedades estudiante antes: ", estudiante)

  function asignarTurno() {
    estudiante.turno = "Noche"
     console.log("Propiedades estudiante después: ", estudiante)
 }
 asignarTurno()


/*   setTimeout(() => {
    console.log('setTimeout: ')
    estudiante.turno = "Noche"
    console.log("Propiedades estudiante después: ", estudiante)
}, 3000); */
// console.log("Propiedades estudiante después: ", estudiante)

//  Agregar propiedades
/*   estudiante.turno = "Noche"
     console.log("Agregar propiedades: ", estudiante)

  console.log('Estudiante: ', estudiante) */


// console.log('Nombre: ', estudiante.nombre)
// console.log('Nota: ', estudiante.nota)

    


  // ------------------------------------------------------------------


//  Template Literal
//  Comillas invertidas
//  ALT + 96
//  Ctrl +  Alt + }
//  ``

// console.log(`Hola ${estudiante.nombre}! Tu nota es: ${estudiante.nota}`)


 // ------------------------------------------------------------------


/* function asignarTurno() {
    estudiante.turno = "Noche"
     console.log("Propiedades estudiante después: ", estudiante)
 }
 asignarTurno() */


  // ------------------------------------------------------------------


 //setInterval y setTimeout
//Settimeout(delay) ejemplo

/* setTimeout(() => {
    console.log('setTimeout: ')
    estudiante.turno = "Noche"
    console.log("Propiedades estudiante después: ", estudiante)
}, 3000); */
  
