/*Resumen de la clase:

Requests en Paralelo

Creamos una nueva función y modificamos levemente el código para hacer el callback ingresando solamente el id:
*/
const API_URL = 'https://swapi.dev/api/'; //url de la API donde vamos a a hacer peticiones
const PEOPLE_URL = 'people/:id'; // es la persona que vamos ir a traer a la API

const opts = { crossDomain: true }; // metodo para saber si el callback es local o remoto
const onPeopleResponse = function(person) { //funcion que imprime lo que recibe del request
    console.log(person.name); // imprime la persona dependiendo del id que le pasemos
};

//con este funcion solo le pasaremos el numero de id de la persona que queremos ver
function obtenerPersonaje(id) { //funcion que recibe un id como parametro
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`; //cambiamos el id de la url dependiendo de cual queremos ver
    $.get(url, opts, onPeopleResponse); //metodo del jquery para hacer el request
};

// Dado este código.
// En qué orden nos llegarán las respuestas ?

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//  3
//  2
//  1

// En este request el resultado llegó en el orden inverso en el que los pedimos.
// Por qué sucede esto ?
//     Por el asincronismo de JS.
// No sabemos en qué orden nos llegarán las respuestas, esto depende del servidor y de cada uno de los requests.
// Iniciamos los requests en un determinado orden pero no sabemos en qué orden van a llegar.