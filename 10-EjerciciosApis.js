/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

const url = "https://jsonplaceholder.typicode.com/posts"
const url2 = "https://jsonplaceholder.typicode.com//posts/1"
const apiKey = "9e6128fbdc7cf66572efbde9ec3f43dc"

// fetch(url)
// .then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch(error => console.error(error))

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// fetch(url)
// .then(response => {
//     if(!(response.ok)){
//         throw new Error (`Error en llamada HTTP: ${response.status}`)
//     }
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch(error => console.error(error))

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function llamadaJsonPlace() {
    try {
        const response = await fetch(url)
        if (!(response.ok)){
            throw new Error (`Error HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        data.slice(1, 20).forEach(e => {
            console.log(`ID: ${e.id}, titulo: ${e.title}`)
        });
        // console.log(data)
    } catch (error) {
        console.error(error)
    }
}


// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function postRequest() { //IA Sugiere pasar directamente el objeto a la función, con lo que solo se usaría body: JSON.stringfy(post)
    try {
        const newPost = {
            "userId": 4,
            "title": "Tu Madre",
            "body": "Tu madre le gusta el chorizo"
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        if(!response.ok){
            throw new Error (`Error eh HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}



// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function putRequest() {
    try {
        const newPost = {
            "userId": 2,
            "title": "Tu Madre",
            "body": "Tu madre le gusta el chorizo"
        }
        const response = await fetch(url2, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        if(!response.ok){
            throw new Error (`Error eh HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}



// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function patchRequest() {
    try {
        const newPost = {
            "body": "Tu madre le gusta el chorizo"
        }
        const response = await fetch(url2, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        if(!response.ok){
            throw new Error (`Error eh HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deleteRequest() {
    try {
        const response = await fetch(url2, { // Si a la función se le pasa el id y se interpola la url junto con / id interpolado se facilita hacer diferentes request de delete
            method: "DELETE"
        })
        if(!response.ok){
            throw new Error (`Error eh HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

function validadorResponse(response){
    if(!response.ok){
            throw new Error (`Error eh HTTP ${response.status}: ${response.statusText}`)
        }
}

async function weatherRequest(city) {
    try {
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        validadorResponse(geoResponse)
        const dataGeoResponse = await geoResponse.json()  // la IA me recomienda validar si dataGeoResponse es un array vacío === 0, por si la ciudad no se encuentra
        console.log(`Esta es lat ${dataGeoResponse[0].lat} y esta es lon ${dataGeoResponse[0].lon} de ${city}`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataGeoResponse[0].lat}&lon=${dataGeoResponse[0].lon}&appid=${apiKey}&units=metric`)
        validadorResponse(response)
        const data = await response.json()
        console.log(`La temperatura de ${city} es ${data.main.temp} grados Celsius y su sensación termica es de ${data.main.feels_like}`)
    } catch (error) {
        console.error(error)
    }
}

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

function getEvolutionNames(chain) { //Función dada por la IA, usa recursividad para recorrer todos los objetos dentro de los objetos que tngan evolve_to species name
  let names = [];

  // Agregar el nombre actual
  if (chain.species && chain.species.name) {
    names.push(chain.species.name);
  }

  // Recorrer evoluciones siguientes
  if (chain.evolves_to && chain.evolves_to.length > 0) {
    chain.evolves_to.forEach(next => {
      names = names.concat(getEvolutionNames(next));
    });
  }

  return names;
}

async function pokemonData(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        validadorResponse(response)
        const data = await response.json()
        if(!data || Object.keys(data).length === 0){
            throw new Error (`No se evidencian datos del pokemon ${name}`)
        }

        const urlSpecie = data.species.url
        const responseSpecie = await fetch(urlSpecie)
        validadorResponse(responseSpecie)
        const dataSpecie = await responseSpecie.json()
        if(!dataSpecie || Object.keys(dataSpecie).length === 0){
            throw new Error (`No se evidencian datos de especie del pokemon ${name}`)
        }

        const urlEvolution = dataSpecie.evolution_chain.url
        const responseEvolution = await fetch(urlEvolution)
        validadorResponse(responseEvolution)
        const dataEvolution = await responseEvolution.json()
        if(!dataEvolution || Object.keys(dataEvolution).length === 0){  //IA me recomienda validar !dataEvolution tabién por si trae null o undefined
            throw new Error (`No se evidencian datos de la cadena de evolución del pokemon ${name}`)
        }
        const detailSpecie = `felicidad base: ${dataSpecie.base_happiness}, ratio captura: ${dataSpecie.capture_rate} y son de color: ${dataSpecie.color.name}`
        const evolutionNames = getEvolutionNames(dataEvolution.chain) // función IA, implementa recursividad para recorrer chain de las especies para traer el nombre
        console.log(`El pokemon ${data.forms[0].name}, los detalles de las especie son ${detailSpecie} y su cadena de evolución es:`, evolutionNames.join(" -> "))
    } catch (error) {
        console.error(error)
    }
}

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API