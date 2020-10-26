// Resumen de la clase: Promesas

// Con los callBacks teníamos un problema al anidarlos.
// Para este problema existen las ‘promesas’.

// Antes era necesario usar librerías externas pero ahora la mayoría de los browsers soportan las promesas.
// Si queremos verificar si las promesas son soportadas por el usuario se podría usar lo que se llama un ‘polifield’. Este detecta si el navegador donde está corriendo nuestro código no soporta las promesas, y si así es, crea las clases de las promesas por nosotros y así podrían ser utilizadas por nosotros de manera transparente para nuestro código.

// Qué son las promesas?
// Tenemos que pensar las promesas como valores que aún no conocemos. Es la promesa de que ahí va a haber un valor cuando una acción asíncrona suceda y se devuelva.

// Las promesas tienen 3 estados y son como cualquier otro objeto de javascript.

// El primero de los estados es ‘pending’. Es el estado cuando las creamos.
// Si se resuelve exitosamente pasa al estado ‘fulfilled’.
// Si ocurre algún error y no se resuelve pasa al estado de ‘rejected’.

// Las promesas pueden no ser asíncronas también.

// Para obtener el valor de la resolución de la promesa llamamos a la función _.then(val =>) _a la que le vamos a pasar como parámetro otra función en la que el primer parámetro será el valor que esperábamos.

// Si sucede algún error agregamos el método .catch(err=>) al que se le asigna una función también como parámetro que va a recibir el error.

// Las promesas se declaran de la siguiente manera:

// new Promise(function(resolve, reject) {
//     //  ...
// }).then(valor => {
//     //  ...
// }).catch(err => {
//     //  ...
// })

// Se crea el nuevo objeto y se le asigna una función con dos parámetros ‘resolve’ y ‘reject’. Estas son dos funciones que debemos llamar si la promesa se resuelve o no.
// Si se resuelve exitosamente llamamos a ‘.then(valor =>’ para obtener el valor del promise dentro del arrow function (valor=>).
// Si sucede algún error podemos llamar al ‘.catch( err =>’ para obtener el tipo de error que sucedió y actuar en consecuencia.

// Otra cosa más a cerca de las promesas es que luego de llegar al estado de 'fulfilled’ podemos retornar otra promesa dentro del .then y de esa manera ir encadenándolas en sucesivas acciones asíncronas. Cada una de ellas puede ser resuelta o rechazada en una nueva promesa que terminará en el estado de ‘fulfilled’.

// Entonces en nuestro código borramos las invocaciones anidadas y volvemos a modificar  obtenerPersonaje().

//function obtenerPersonaje() ya no recibirá un callback, directamente va a retornar una promesa.

// function obtenerPersonaje(id) {
//     return new Promise(function(resolve, reject) {
//         // ...
//     })
// }

//Como arrow function:

// function obtenerPersonaje(id) {
//     return new Promise((resolve, reject) => {
//         //  ...  //Aquí dentro se genera el llamado asíncrono   ...
//     })
// }
// Dentro de esta función se va a generar el llamado asíncrono.
// Devolvemos la generación de url y el $.get con el parámetro ‘callback’ reemplazado por una nueva función a modo de callback que se va a ejecutar recién cuando el get haya sido exitoso resolviendo la promesa. Por lo que le pasamos el parámetro ‘data’, a través del cual van a llegar los valores de nuestro personaje, y dentro de la función invocamos, a su vez, a la función resolve.
// También vamos a vover a insertar el método .fail() invocando el parámetro/función ‘reject’ con parámetro ‘id’.

// function obtenerPersonaje(id) {
//     return new Promise((resolve, reject) => {
//         const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//         $
//             .get(url, opts, function(data) {
//                 resolve(data)
//             })
//             .fail(() => reject(id))
//     })
// }

//La función se invocaría entonces solamente con el parámetro id.

//obtenerPersonaje(id)

//La forma de obtener el valor es llamando al .then() con su respectiva función como parámetro que va a estar trayendo a nuestro personaje a través del parámetro ‘data’ que está en la función invocada en los parámetros del .get si este es exitoso.

// obtenerPersonaje(1)
//     .then(function(personaje) {
//         console.log(personaje.name)
//     })
//     //Y si sucede algún error en nuestro callback lo vamos a obtener con el método .catch() que va a recibir el id que viene a través del .fail() de la función.

// function onError(id) {
//     console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
// }

// obtenerPersonaje(1)
//     .then(function(personaje) {
//         console.log(personaje.name)
//     })
//     .catch(function(id) {
//         onError(id)
//     })

//O directamente invocamos la función desde el parámetro del .catch:

// function onError(id) {
//     console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
// }

// obtenerPersonaje(1)
//     .then(function(personaje) {
//         console.log(personaje.name)
//     })
//     .catch(onError)
//Código final completo:

const API_URL = 'https://swapi.dev/api/' //URL de la API donde obtenemos datos
const PEOPLE_URL = 'people/:id' //URL de laa personas
const opts = { crossDomain: true } //dominio para saber si el callbacks es local o remoto

function obtenerPersonaje(id) { //funcion para obtener el personaje se le pasa el parametro del personaje que queremos
    return new Promise((resolve, reject) => { //se declara una nueva promesa quye recibe dos parametros que son dos funciones una si se resuelve la promesa y otro si se rechaza
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` //construcimos la URL con el id que mandamos
        $
            .get(url, opts, function(data) { //recibidmos la data de la Api
                resolve(data) //si se resuelve vamos a trabajar con la data
            })
            .fail(() => reject(id)) //si falla queremos el id que le pasamos
    })
}

function onError(id) { //con el id que no se oudo obtener el valor se lo pasamos y mostramos el mensaje de error
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`) //mensaje de error
}

obtenerPersonaje(0) //invocamos a la funcion y le pasamos el id que queremos
    .then(function(personaje) { //si se resulve la promesa obtenemos la data con la informacion
        console.log(personaje.name) //obtenemos el nombre del personaje de la data que recibimos
    })
    .catch(onError); //si no se cumple le pasamos al catch la funcion sin parametro porque ya lo habia recibido anteriormente cuando se declara