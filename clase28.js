const API_URL = 'https://swapi.dev/api/'; //url de la API donde vamos a a hacer peticiones
const PEOPLE_URL = 'people/:id'; // es la persona que vamos ir a traer a la API

const opts = { crossDomain: true }; // metodo para saber si el callback es local o remoto
//const onPeopleResponse = function(person) { //funcion que imprime lo que recibe del request
//    console.log(person.name); // imprime la persona dependiendo del id que le pasemos
//};

// //con este funcion solo le pasaremos el numero de id de la persona que queremos ver
// function obtenerPersonaje(id) { //funcion que recibe un id como parametro
//     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`; //cambiamos el id de la url dependiendo de cual queremos ver
//     $.get(url, opts, onPeopleResponse); //metodo del jquery para hacer el request
// };

// // Dado este código.
// // En qué orden nos llegarán las respuestas ?

// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)

//  3
//  2
//  1

/**
 * Para evitar no saber el orden en el que van a llegar los datos tenemos que modificar un poco el codigo
 * que teniamos para eso quedara de la siguiente manera
 */

//con esta funcion le pasaremos el id para el personaje que queremos y una funcion a la cual se le puede llamar callback que es la que nos va permitir tener un control en el orden que vamos a recibir los datos
function obtenerPersonaje(id, callback) { //funcion que recibe un id como parametro y una funcion
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`; //cambiamos el id de la url dependiendo de cual queremos ver
    $.get(url, opts, function(person) { //funcion que imprime lo que recibe del request
        console.log(person.name); // imprime la persona dependiendo del id que le pasemos //metodo del jquery para hacer el request pero el tercer parametro se lo pasaremos como funcion no como una constante
        if (callback) { //vamos a ver si nos pasan la funcion callback para ejecutar la funcion si no se puede dejar vacia
            callback();
        }

    });
};

// Dado este código.
// En qué orden nos llegarán las respuestas ?

obtenerPersonaje(1, function() {
        obtenerPersonaje(2, function() {
            obtenerPersonaje(3, function() {
                obtenerPersonaje(4, function() {
                    obtenerPersonaje(5)
                })
            })
        })
    }) //le pasamos una funcion que va ser el callback donde dentro de esta funcion vamos a llamar a el personaje 2 y al tres asi susecivamente todos los que queremos


//A esto ultimos se le conoce como callbackHell o infierno de callbacks entre mas llamadas hacemos mas dificil de entdner esto se vuelve