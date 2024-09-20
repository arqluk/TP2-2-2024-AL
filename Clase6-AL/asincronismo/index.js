console.log("Hola, esto es un ejemplo de asincronismo")
console.log()

async function consultaDePalabrasSinAsync() {
    const data = fetch ("https://texto.deno.dev/palabras?cantidad=10")
                .then((res) => console.log("Respuesta dentro del bloque then: ", res))
    console.log("Sin ASYNC: ", data)
}

consultaDePalabrasSinAsync()





// async function consultaDePalabras() {
//     const data = await fetch ("https://texto.deno.dev/palabras?cantidad=10")
//     console.log("Datos: ", data)
// }

// consultaDePalabras()



// async function consultaDePalabrasSinAsync() {
//     const data = fetch ("https://texto.deno.dev/palabras?cantidad=10")
//                 .then((res) => console.log("Respuesta dentro del bloque then: ", res))
//     console.log("Sin ASYNC: ", data)
// }

// consultaDePalabrasSinAsync()