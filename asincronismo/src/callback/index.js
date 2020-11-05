function sum(num1, num2) {
    return num1 + num2;
}


function calc(num1, num2, callback) { //le pasamos un funcion que va ser el callback por conveniencia se le pone callback pero puede ser cualquier nombre

    return callback(num1, num2); //va retornar la funcion que le pasemos con los dos parametros que le pasamos a la funcion principal

}

console.log(calc(6, 2, sum)); //invocamos la funcion y le pasamos los dos numeros y estos dos numeros se los pasamos como parametros a la funcion de callback para que retorne en ese caso la suma que es la funcion que se pasa como parametro en otra funcion


/**
 * si queremos ejecutar este archivo usando npm run nos dara error nos dira script desaparecido 
 * para eso tenemos que irnos a la parte del package.json en este proyecto y en la parte de 
 * script borrar lo que esta y añadir nuestro script
 * node src/callback/index.js y ponerle como nombre callback al final nos quedaria de la 
 * siguiente manera
 * "callback": "node src/callback/index.js" y ya podremos desde la consola usar 
 * npm run callback y podremos ejecutar el archivo
 */

function date(callback) { //funcion que imprimira la fecha y recibe como parametro una funcion callback(se usa este nombre por convenio no es obligacion)
    console.log(new Date); //imprime una nueva fecha
    setTimeout(() => { //setTimeOut recibe dos parametros una funcion y el tiempo de espera en este caso se le paso una arrow function
        let date = new Date; //se declara una variable que guardara la fecha
        callback(date); //se invoca la funcion callback y se le pasa la fecha
    }, 3000); //se esperara 3s para imprimir otra fecha pero se imprimira desde la funcion callback
}

function printDate(date) { //funcion que recibe como parametro una fecha
    console.log(date); //imprime una fecha
}

date(printDate); //invocamoa la funcion que recibe como parametro a un callback