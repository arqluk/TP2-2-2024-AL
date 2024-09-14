import fs from "fs";

// ---------------------------------------------------------------------------------//

// File System Sincrónico

// console.log("--------INICIO BLOQUE UNO---------");
// console.log();

// function readFileSync() {
//   const file = fs.readFileSync("doc-a.txt", "utf-8");
//   console.log("File: ", file);
//   const writeFile = fs.writeFileSync("doc-a.txt", "Sobrescritura Doc A ...");
//   const updateFile = fs.readFileSync("doc-a.txt", "utf-8");
//   console.log("readFileSync con actualizaciones: ", updateFile);
//   console.log("readFileSync sin actualizaciones: ", file);
// }
// readFileSync();

// console.log();
// console.log("----------FIN BLOQUE UNO----------");

// console.log ("-".repeat(50))


// ---------------------------------------------------------------------------------


// Callbacks
// función que se pasa como argumento a otra función para que sea invocada

// function suma(a, b, cb) {
//     // return es una palabra reservada para forzar una respuesta (retornar algo)
//     return cb(a, b);
//   }

//   const operation = (a, b) => a + b;

//   console.log( "Resultado función suma: ", suma(10, 20, operation) );


// ---------------------------------------------------------------------------------


// File System Asincrónico con Callbacks

// console.log("--------INICIO BLOQUE DOS---------");
// console.log();

// function readFileCallback() {

//     fs.readFile("doc-b.txt", "utf-8", (error, data) => {
//     console.log("Ha ocurrido un error: ", error);
//     console.log("Archivo B: ", data);

//         fs.writeFile("doc-b.txt", "Primera Sobrescritura Doc B ...", (err) => {
//         console.log("Error: ", err);

//             fs.readFile("doc-b.txt", "utf-8", (error, data) => {
//             console.log("Ha ocurrido otro error: ", error);
//             console.log("Archivo B sobrescrito: ", data);
//             })

//         })

//     })

// }

// readFileCallback();

// console.log();
// console.log("----------FIN BLOQUE DOS----------");


// ---------------------------------------------------------------------------------

// Callback Hell (anidación de callbacks) NOO!!!!

// function readFileCallback() {

//     fs.readFile("doc-b.txt", "utf-8", (error, data) => {
//     console.log("Ha ocurrido un error: ", error);
//     console.log("Archivo B: ", data);

//         fs.writeFile("doc-b.txt", "Primera Sobrescritura Doc B ...", (err) => {
//         console.log("Error: ", err);

//             fs.readFile("doc-b.txt", "utf-8", (error, data) => {
//             console.log("Ha ocurrido otro error: ", error);
//             console.log("Archivo B sobrescrito: ", data);

//                 fs.writeFile("doc-b.txt", "Segunda Sobrescritura Doc B ...", (err) => {
//                 console.log("Error: ", err);
        
//                     fs.readFile("doc-b.txt", "utf-8", (error, data) => {
//                     console.log("Ha ocurrido un nuevo error: ", error);
//                     console.log("Archivo B sobrescrito: ", data);

//                     })

//                 })

//             })

//         })

//     })

// }
// readFileCallback();

// console.log();
// console.log("----------FIN BLOQUE DOS----------");


// ---------------------------------------------------------------------------------


//File System Asincrónico con Promesas

// function myPromise(sucess) {
//     return new Promise((resolve, reject) => {
//       if (sucess) {
//         resolve("Promesa resuelta!");
//       } else {
//         reject("La promesa no se pudo cumplir.");
//       }
//     });
//   }
 
//   console.log("Mi promesa: ", myPromise(true))
//   console.log("Mi promesa: ", myPromise(false))


  // ---------------------------------------------------------------------------------


//   console.log("--------INICIO BLOQUE TRES---------");
//   console.log();

//   function myPromise(sucess) {
//     return new Promise((resolve, reject) => {
//       if (sucess) {
//         resolve("Promesa resuelta!");
//       } else {
//         reject("La promesa no se pudo cumplir.");
//       }
//     });
//   }

//   function myPromise(sucess) {
//     return new Promise((resolve, reject) => {
//       if (sucess) {
//         resolve( {operacion: "exitosa"} );
//       } else {
//         reject( {operacion: " no exitosa"} );
//       }
//     });
//   }

//then, finally y catch siempre después de la invocación de la función que nos devuelve una promesa

//  myPromise(true)
//     .then( (result) => console.log("Caso de éxito de myPromise: ", result) )
//     .finally( () => console.log("Esto se retorna de todas formas.") )
//     .catch( (err) => console.log("Caso de error en myPromise: ", err) )
    
    
//     console.log ("*".repeat(50))

//     myPromise(false)
//     .then((result) => console.log( "Caso de éxito de myPromise: ", result) )
//     .catch((err) => console.log( "Caso de error en myPromise: ", err) )
//     .finally( () => console.log("Esto se retorna de todas formas.") )
    

// console.log();
// console.log("----------FIN BLOQUE TRES----------");


    // ---------------------------------------------------------------------------------

  
//     console.log("--------INICIO BLOQUE TRES---------");
//     console.log();

//   function readFilePromises() {
//     fs.promises
//       .readFile("doc-c.txt", "utf-8")
//        .then( (res) => console.log("Resultado Bloque Tres: ", res) )
//        .then(() => {
//                 // fetch: para consumir datos de una API
//                 //podemos tener distintas operaciones dentro del .then
//                 const data = fetch("https://swapi.dev/api/people/1")
//                   .then( (res) => console.log("RESPUESTA FETCH", res) );

//                 console.log( "TYPEOF:", typeof(data) )
//                 console.log("DATA: ", data)

//                 function sarasa(datos) {
//                     datos.then( (res) => console.log("Respuesta en función sarasa: ", res) );
//             }
        
//             sarasa(data);
//         })
//   }

//   readFilePromises();

//   console.log();
//   console.log("----------FIN BLOQUE TRES----------");


    // ---------------------------------------------------------------------------------


  // File System Asincrónico con Async/Await

    console.log("--------INICIO BLOQUE CUATRO---------");
    console.log();

async function readFileAsync() {
  //bloque try-catch nos permite manejar casos de éxito y error
  try {
    const file = await fs.promises.readFile("doc-d.txt", "utf-8");
    console.log("Archivo D: ", file);
    const updateFile = await fs.promises.writeFile("doc-d.txt", "Sobrescritura Doc D...");
  } catch (error) {
    console.error("Error en el catch. ", error);
  }
}

readFileAsync();

console.log();
console.log("----------FIN BLOQUE CUATRO----------");




// console.log ("-".repeat(50))











