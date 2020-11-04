//en la version 7 de ecmascript se ha añadido lo siguiente

//hay dos cambios las operaciones en forma exponencial y el valor include

//si tenemos un array y queremos ver si esta el 7 incluido ahora podemos usar

let arreglo = [1, 2, 3, 4, 5, 6, 7];

if (arreglo.includes(7)) {
    console.log('el siete si esta');
} else {
    console.log('el siete no esta');
}


//tambien se añadio la forma de realizar potencias ejemplo

let base = 2;
let exponente = 3;
let resultadi = base ** exponente //se usa el ** para indicar el exponente de la potencia a la cual lo queremos elevar
console.log(resultadi);