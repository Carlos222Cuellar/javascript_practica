//Una caracteristcia que fue agregada a es6 son los parametros por defecto nosotros podemos establecer ciertos valores que le pasamos a un a funcion por defecto


//antes de ecmascript 6 se hacia de la siguiente manera al declarar una funcion con parametros

function newFucntion(name, age, country) {
    var name = name || "carlos"; //inicializar y dar un valor por defecto
    var age = age || 24;
    var country = country || "El salvador";
    console.log(name, age, country) //imprimimos
}

//en es6 se hace de la siguiente manera

function NewFunction2(name = 'carlos', age = 24, country = 'El Salvador') {
    console.log(name, age, country)
}

NewFunction2();
NewFunction2('Juan', 34, 'Colombia');

//template Literals 

//como se trabaja antes

export let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world; //se concatenaba agregando un espacio vacio lo cual no es nada intuitivo
console.log(epicPhrase);


//con es6 se puede hacer lo siguiente

//formando la frase otra vez tenemos usamos las `` comillas francesas

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//multilinea antes de es6

let lorem = "hola este es un texto \n" +
    "esto es una linea multiple";

//despues de es6 se puede hacer los siguiente

let lorem2 = `esto es una frase epica
esta es una frase epica 2`;

console.log(lorem);
console.log(lorem2);

//destructuracion

//imaginemos que tengo un objeto

let carlos = {
    name: 'carlos',
    age: 23,
    country: 'El salvador'
}

//si lo quiero imprimir haciamos 

console.log(carlos.name, carlos.age, carlos.country);

//pero ahora podemos hacer lo siguiente

let { name, age, country } = carlos;

//y puedo usar ya asi 

console.log(name, age, country);

//operador de propagacion
//si tenemos dos gruppos y lo queremos unir a otro grupo lo que tenemos que hacer es lo siguiente

let team1 = ['juan', 'miguel', 'luis'];
let team2 = ['mario', 'carlos', 'samuel'];
//si tenemos otro grupo donde esta antonio pero tambien estan los miembros del team 1 y 2 y los queremos en otro grupo haremos uso del operador de propagacion ejemplo

let education = ['antonio', ...team1, ...team2]; //listo

console.log(education);

//porque se usa let y no var

/**
 * let es una nueva forma en la cual vamos a trabajar para guardar elemntos en memoria
 * let solo esta disponoble en el scope y var esta de manera global
 * const es una constatnte que fue añadida en es6 no se puede reasignar
 */


//arrow function promesas y parametros

//antes para declarar un objeto teniamos que hacer

let name = 'carlos';
let age = 23;

obj = { name: name, age: age };

//ahora en es6 lo hacemos asi

obj2 = { name, age };
console.log(obj2);


//arrow function

//si tenemos 
const names = [
    { name: 'oscar', age: 32 },
    { name: 'carlos', age: 24 }
];

//si queria iterar por cada elemento para mostrar en consola

//en map le pasaba una funcion anonima

let listOfName = names.map(function(item) {
    console.log(item.name);
})

//con arrow fucntion que son funciones anonimas

let listOfName2 = names.map(item => console.log(item.name));

//promesas con las cuales trabajamos en asincronismo

//generar promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('HEY!');
        } else {
            reject('Ups');
        }
    })
}

helloPromise()
    .then((response) => console.log(response))
    .then(() => console.log('hola'))
    .catch((error) => console.log(error))

//se ejecuta el response porque en resolve le mande un true por eso respondio de manera correcta si le mando false en el response se imprimira el upps


//clases modulos y generadores

class Calculadora { //con la palabra class que es reservada se declara una clase
    constructor() { //el constructor que tendra la clase

        this.valueA = 0;
        this.valueB = 0;

    }

    //despues del constructor podemos agregar nuestros metodos

    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return (this.valueA + this.valueB);
    }

}

//ahora podemos crear una instancia de nuestra clase

const calc = new Calculadora();

//ahora ya podemos llamar a las propiedades de la clase apartir de la instancia

console.log(calc.sumar(2, 2));

//si tengo otro archivo de js con caracteristicas que quiero en este archivo lo unico
//que tengo que hacer es importarlo de la siguiente manera

import hello from './module.js';
console.log(`Hello Module -> , ${hello()}`);


//generator

function* helloWorld() { //el asterisco indica que es una generator
    if (true) {
        yield 'Hello, '; //permite retornar algo en este caso es un string el yield guarda el estado de forma interna

    }
    if (true) {
        yield 'World';
    }
}

//ahora para usar la funcion generator hacemos

const generatorHello = helloWorld();
//usaremos next para poder ejecutar la primer logica y obtener el valor 
//esto lo guardara y cuando ejecute el siguiente next recordara donde estaba y me mostrara el siguiente
//asi para cada paso que tenga

console.log(generatorHello.next()); //si queremos el valor especifico hariamos un .value
console.log(generatorHello.next());

//un caso donde se usan los generator son en la serie fibonacci