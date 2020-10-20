// Retomando el ejemplo anterior

var carlos = {
    nombre: 'Carlos',
    edad: 24
};

var mario = {
    nombre: 'Mario',
    edad: 17
};
const EDAD_PARA_SER_MAYOR = 18;


// function esMayorDeEdad(persona) {
//     return persona.edad >= EDAD_PARA_SER_MAYOR;
// }
//En JS podemos hacer que una variable apunte a una funcion y es totalmente valido como por ejemplo

// var esMayorDeEdad = function(persona) {
//         return persona.edad >= EDAD_PARA_SER_MAYOR;
//     } //y todo sigue funcionando igual

//se acostumbra a usar en lugar de var const para indicar que es una funcion

//Pero la funcion de arriba tambien se puede hacer con arrow function que es lo siguiente

// const esMayorDeEdad = persona => { // si solo tenemos un parametro en lugar de escribir (persona) lo podemos dejar sin parentesis
//     return persona.edad >= EDAD_PARA_SER_MAYOR;
// }

/* 
lo anterior si solo retorna algo podemos omitir las llaves y la palabra return entones en lugar de tener
const esMayorDeEdad = persona => {
    return persona.edad >= EDAD_PARA_SER_MAYOR;
}

podemos tener 
const esMayorDeEdad = persona =>  persona.edad >= EDAD_PARA_SER_MAYOR;
 y va seguir funcionando igual

 pero tambien en lugar de usar persona.edad podemos reestructurar el objeto de la siguiente manera y nos queda
const esMayorDeEdad = ({edad}) =>  edad >= EDAD_PARA_SER_MAYOR; no podemos solo usar las llaves es necesario usar los parentesis
 */


const esMayorDeEdad = ({ edad }) => edad >= EDAD_PARA_SER_MAYOR;


function imprimirEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}