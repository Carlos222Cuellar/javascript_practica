// var nombre = 'Carlos';

// function imprimirNombreEnMayusculas() {
//     nombre = nombre.toLocaleUpperCase();
//     console.log(nombre);
// }

// imprimirNombreEnMayusculas();


/* 
Lo que sucede en el codigo de arriba es los siguiente cuando declaramos nombre
este se declaro de forma global por lo tanto lo podemos usar dentro de nuestra funcion
pero cuando lo usamos dentro de nuestra funcion y al invocarlo la funcion cambio el valor 
de nuestra variable global lo cual no es bueno
para evitar eso se puede hacer lo siguiente 
*/

var nombre = 'Carlos'; //variable de forma global

function imprimirNombreEnMayusculas(n) { //recibe un parametro n
    n = n.toUpperCase(); //el parametro n que recibio fue el que combierte en mayuscula
    console.log(n); //lo imprime
}

imprimirNombreEnMayusculas(nombre); //invocamos la funcion y le pasamos la variable global como parametro
//esto no afectara ala variable global es decir no la modificara en su valor.