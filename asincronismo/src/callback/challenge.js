//vamos a instalar la dependencia de xmlhttpRequest que es un objeto que esta en js que nos permite hacer peticiones

//vamos  a crear una instancia de xmlhttprequest

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';
//crear funcion que nos va permitir traer informacion de nuestra api

function fetchData(url_api, callback) { //dos valores se le pasan un callback y la url de la api
    //tengo que generar la refencia al objeto que quiero en este caso es xhttp

    let xhttp = new XMLHttpRequest();
    //vamos a hacer un llamado o abrir a una url

    xhttp.open('GET', url_api, true) //nos permite pasar que es lo queremos hacer luego una url y al final untercer valor que es que se maneje de forma asincrona por defecto esta en true
        //ahora tengo que escuchar loq ue hara esta peticion
    xhttp.onreadystatechange = function(event) { //si este cambio sucede le paso una fucnion con una validacion
        if (xhttp.readyState === 4) { //.readyState me dice que estado esta listo lo comparo con el estado 4 que sgnifica que se completo hay otros 4 estados
            //tengo que ejecutar otra llamada en este caso un if para saber en que estats esta ya sea un 500 o 400 o 200 que es lo queremos
            if (xhttp.status === 200) {
                //ya que tenemos este podemos regresar el callback normalmente utiliza un estandar dentro de node que me dice que el pirmer valor que recibe es un error y luego la informacion
                callback(null, JSON.parse(xhttp.responseText)); //se le pasa null como primer parametro porque dijimos que primero recibe el error y nosotros no le vamos a mandar nada luego recibe un JSON lo tengo que parsear porque lo que recibo es una respuesta en texto si no lo paso de esta forma voy  mandar un solo string como objeto entonces no podre iterar


            } else { //como buena practica se pasa el error por si falla algo
                const error = new Error('Error' + url_api); // asi se crea un error haceindo una instancia de error en js
                return callback(error, null); //retornamos el callback con el error  y lugo null porque no le pandamos una respuesta
            }
        }
    }
    xhttp.send(); //se envia la solicitud si no no hara nada 
}

//ahora vamos a hacer una peticion a nuestra api ver cuantos personajes hay luego accedemos al personaje una para ver su ubicacion para luego saber en que dimension esta para esto haceremos tres peticiones

fetchData(API, function(error1, data1) {

        if (error1) return console.error(error1); //se valida

        //pero si funciona hare y le vuelvo a pasar api y como se que el personaje esta en results le paso el results con el primer personaje que es el quiero
        fetchData(API + data1.results[0].id, function(error2, data2) {
            if (error2) return console.error(error2); //se valida
            //traer el origen de nuestro peronaje en origin porque alli esta el origen de nuestro personaje
            fetchData(data2.origin.url, function(error3, data3) {
                if (error3) return console.error(error3);
                //imprimo datos en consola
                console.log(data1.results[0].name);
                console.log(data2.name);
                console.log(data3.dimension);
            })

        })
    }) //recibe api que declaramos arriba y como segundo parametro le pasamos la funcion callback que se va a ejecutar que recibe los dos paramtros el error y el resultado sle ponemos data 1 porque vamos usar la peticion varias cveces de forma anidada