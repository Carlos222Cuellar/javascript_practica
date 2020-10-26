const API_URL = 'https://swapi.dev/api/'; //url de la API donde vamos a a hacer peticiones
const PEOPLE_URL = 'people/:id'; // es la persona que vamos ir a traer a la API

const opts = { crossDomain: true }; // metodo para saber si el callback es local o remoto

//con esta funcion le pasaremos el id para el personaje que queremos y una funcion a la cual se le puede llamar callback que es la que nos va permitir tener un control en el orden que vamos a recibir los datos
function obtenerPersonaje(id, callback) { //funcion que recibe un id como parametro y una funcion
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`; //cambiamos el id de la url dependiendo de cual queremos ver
    $.get(url, opts, callback).fail(function() {
        console.log('Ha ocurrido un error al procesar la respuesta del personaje' + ' ' + id);
    }); //fail recibe como parametro una funcion callback
    //funcion que imprime lo que recibe del request ahora le psamos directaemnte el callback sin ahcer validaciones de si nos llega o no lo que se hara es manejar las exepciones


};

obtenerPersonaje(1, function(person) { //aqui imprimimos lo que queremos en el callback pasandole como parametro el id del personaje
    console.log(person.name); //imprimimos el personaje que estamos llamando 
    obtenerPersonaje(2, function(person) {
        console.log(person.name);
        obtenerPersonaje(3, function(person) {
            console.log(person.name);
            obtenerPersonaje(4, function(person) {
                console.log(person.name);
                obtenerPersonaje(17, function(person) {
                    console.log(person.name);
                })
            })
        })
    })
})