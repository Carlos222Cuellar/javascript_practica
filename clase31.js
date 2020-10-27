const API_URL = 'https://swapi.dev/api/' //URL de la API donde vamos a obtener lo personajes
const PEOPLE_URL = 'people/:id' //el numero de personaje que queremos
const opts = { crossDomain: true } //es el tipo de callback remoto o local

function obtenerPersonaje(id) { //funcion que obtiene los personajes
    return new Promise((resolve, reject) => { //generamos una promesa
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` //cosntruimos la URL con el id de personaje que queremos traer
        $
            .get(url, opts, function(data) { //jquery para obtener la data de la API
                resolve(data) //si se resuelve el get queremos la data
            })
            .fail(() => reject(id)) //si falla la peticion
    })
}

function onError(id) { //funcion para saber en que personaje fallo la peticion
    console.log(`Sucedió un error al obtener el personaje ${id}`) //mostramos el mansaje de fallo
}

async function obtenerPersonajes() { //tenemos que usar la palabra async para decir que es la funcion asincrona ademas que se usa con la palabra await
    var ids = [1, 2, 3, 4, 5, 6, 7] //array donde se guardara la data que vamos a recibir de la peticion
    var promesas = ids.map(id => obtenerPersonaje(id)) //declaramos la variable promesas que va recibir la data y va cambiar el array anterior usando el metodo map el cual se le pasa como parametro una funcion
    try {
        var personajes = await Promise.all(promesas) //aqui se va detener hasta que se cumplan todad las promesas
        console.log(personajes) //imrprime los personajes
    } catch (id) { //capura el error dependendiendo en cual id falle
        onError(id) //le pasa el id con error al funcion
    }
}

obtenerPersonajes() //llamamos la funcion para que se realice