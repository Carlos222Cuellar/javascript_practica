//vamos a instalar la dependencia de xmlhttpRequest que es un objeto que esta en js que nos permite hacer peticiones

//vamos  a crear una instancia de xmlhttprequest

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//crear funcion que nos va permitir traer informacion de nuestra api

const fetchData = (url_api) => { //arrow function que recibe un solo parametro que seria la ur de la api
    return new Promise((resolve, reject) => {

        //tengo que generar la refencia al objeto que quiero en este caso es xhttp

        const xhttp = new XMLHttpRequest();
        //vamos a hacer un llamado o abrir a una url

        xhttp.open('GET', url_api, true) //nos permite pasar que es lo queremos hacer luego una url y al final untercer valor que es que se maneje de forma asincrona por defecto esta en true
            //ahora tengo que escuchar loq ue hara esta peticion
        xhttp.onreadystatechange = (() => { //si este cambio sucede le paso una fucnion con una validacion
            if (xhttp.readyState === 4) { //.readyState me dice que estado esta listo lo comparo con el estado 4 que sgnifica que se completo hay otros 4 estados
                //tengo que ejecutar otra llamada en este caso un if para saber en que estats esta ya sea un 500 o 400 o 200 que es lo queremos
                (xhttp.status === 200) ?
                resolve(JSON.parse(xhttp.responseText)): reject(new Error('Error ', url_api))

            }
        });
        xhttp.send(); //se envia la solicitud si no no hara nada 
    });
}

module.exports = fetchData;