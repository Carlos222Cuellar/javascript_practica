// si tenemos dos objetos con dos personas y queremos saber si son mayores de edad entonces hacemos

var carlos = {
    nombre: 'Carlos',
    edad: 24
};

var mario = {
    nombre: 'Mario',
    edad: 17
};

//para poder devolver si una persona es mayor de edad podemos hacer lo siguiente

// function esMayorDeEdad(persona) {
//     if (persona.edad >= 18) {
//         console.log(`${persona.nombre} es mayor de edad`);
//     } else {
//         console.log(`${persona.nombre} no es mayor de edad`)
//     }
// }

//si invocamos esta funcion en el navegador funciona muy bien pero podemos mejorar con funciones que devuelven funciones
//como por ejemplo podemos crear una funcion que devuelva un valor de true o false de si es mayor de edad

// function esMayorDeEdad(persona) {
//     return persona.edad >= 18;
// }

//la funcion que estaba arriba entonces la podemos declarar de la siguiente manera
function imprimirEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

//va funcionar igualmente pero hemos mejorado el codigo y es mas facil de leer

//pero aun asi si queremos quitar ese 18 porque no se entiende que es podemos declararlo en una variable
//var edadParaSerMayor = 18;
//const edadParaSerMayor = 18;//por convenio se usa el nombre en mayusculas y separado por guiones en una constante
const EDAD_PARA_SER_MAYOR = 18;
//y todo funcionara de la misma manera que antes

//y la funcion sera la siguiente

function esMayorDeEdad(persona) {
    return persona.edad >= EDAD_PARA_SER_MAYOR;
}

//y todo sigue igual que antes

//pero aun podemos hacerlo mejor podemos usar const en lugar de var para decir que 18 es un constante