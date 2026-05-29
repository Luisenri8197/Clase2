// Manejo de APIs

// APIs REST (HTTP + URLs + JSON)

// Métodos HTTP
//GET Solicitar
//POST Enviar
//PUT Actualizar
//DELETE Eliminar

// Códigos de respuesta
// 200 Ok - 300 Redireccion - 400 Error Cliente - 500 Recurso denegado

// Consumir una API

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    //Transforma respues a JSON
    return response.json()
})
.then(data => {
    //Procesa los datos
    console.log(data)
})
.catch(error => {
    //Captura los errores
    console.log("Error", error)
})

//Async/Await en APIs

async function getPost() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

//Solicitud POST

async function createPost() {
    try{
        const newPost = {
            "userId": 1,
            "title": "Titulo rico delicioso",
            "body": "Que mira sapa"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

createPost()

// ------- herramientas para validar APIs (IDLE) ------
//https://www.postman.com
//https://apidog.com
//Extensión Thunder Client de VS

// ------- Manejo de Errores -------

async function getPostControl() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!response.ok){
            throw Error (`Error en HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}
getPostControl()


// Métodos adicionales

// PATCH - actualizar parcialmente una BD
// OPTIONS - Qué métodos HTTP están permitidos para un recurso
// PUT - Se actualiza el recurso completo

//EJEMPLO PATCH

async function partialPostUpdate() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "Titulo rico delicioso nuevo"})
        })
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

partialPostUpdate()

//Autenticación API KEY
//luisitocarrion
async function getWeather(city) {
    const apiKey = "9e6128fbdc7cf66572efbde9ec3f43dc"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try{
        const response = await fetch(url)
        if(!response.ok){
            throw Error (`Error en HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

getWeather("Cali")

// Otros métodos de autenticación
// - BEARER TOKENS
// JSON WEB TOKENS JWT

// ----- Versionado de APIs -----
// - Actualización APIS
// - http://api.example.com/v1/resources
// - http://api.example.com/v2/resources

//Otras APIs - POKEAPI

async function getPokemon(pokemon) {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(!response.ok){
            throw Error (`Error en HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log(`Las habilidades de ${data.name} son: `)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        });
    }catch(error){
        console.log("Error", error)
    }
}

getPokemon("ditto")