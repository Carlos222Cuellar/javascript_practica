function sum(num1, num2) {
    return num1 + num2;
}


function calc(num1, num2, callback) { //le pasamos un funcion que va ser el callback por conveniencia se le pone callback pero puede ser cualquier nombre

    return callback(num1, num2); //va retornar la funcion que le pasemos con los dos parametros que le pasamos a la funcion principal

}

console.log(calc(2, 2, sum)); //invocamos la funcion y le pasamos los dos numeros y estos dos numeros se los pasamos como parametros a la funcion de callback para que retorne en ese caso la suma que es la funcion que se pasa como parametro en otra funcion


/**
 * si queremos ejecutar este archivo usando npm run nos dara error nos dira script desaparecido 
 * para eso tenemos que irnos a la parte del package.json en este proyecto y en la parte de 
 * script borrar lo que esta y añadir nuestro script
 * node src/callback/index.js y ponerle como nombre callback al final nos quedaria de la 
 * siguiente manera
 * "callback": "node src/callback/index.js" y ya podremos desde la consola usar 
 * npm run callback y podremos ejecutar el archivo
 */