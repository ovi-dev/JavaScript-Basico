// Fetch API con Async / Await
const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then((response) => {
//         if(response.ok) {
//             return response.json()
//         }
//         throw new Error('Hubo un error...')
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message)) 

        //forma basica

    // const consultarApi = async ( ) => {
    //     const respuesta = await fetch(url)  // este fetch es reservado Js
    //     const losdatos = await respuesta.json()
    //     console.log(losdatos)

    // }

    // consultarApi()

    // // aqui se mueve el codigo de arriba para cacharlo
    // try {
        
    // } catch (error) {
        
    // }



// const consultarAPI = async () => {
//     try {
//         const response = await fetch(url)
//         if(!response.ok) {
//             throw new Error('Hubo un error...')
//         }
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// consultarAPI()

///////////////////////////////////////////////////////////////////////


const consultarApi2 = async() => {
    try {
        const preguntaApi = await fetch(url)
        if (!preguntaApi.ok) {
            throw new Error ( console.log('hay un error'))
        }

        const larespuestaApi = await preguntaApi.json()
        console.log(larespuestaApi)

    } catch (error) {
        console.log(error.message)
        
    }
}   

consultarApi2()
