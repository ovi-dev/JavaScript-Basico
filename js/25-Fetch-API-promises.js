// Fetch API con Promises
const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((response) => { //el .then es como decir entonces ejp: fetch(url).entonces si if responde ok devuelve un .json y sino throw muestra esto
        if(response.ok) { // el ok es reservado de javaScript
            return response.json()
        }
        throw new Error('Hubo un error...') //Error esta reservado por JavaScript
    })
    .then(data => console.log(data))
    .catch(error => {console.log(error.message)}) //message es reservado para JavaScript



// fetch(url)
//     .then( (respuesta) => {
//         return respuesta.json()
//     }) 
//     .then((datosFinales) => {
//         console.log(datosFinales)
//     })
    

    // fetch(url)
    // .then( (respuesta) => {
    //     return respuesta.json()
    // }) 
    // .then((datosFinales) => {
    //     console.log(datosFinales)
    // })
    // .catch((error) => console.log(error))