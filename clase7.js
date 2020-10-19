//declaramos un objeto
var carlos = {
    nombre: 'Carlos',
    edad: 24,
    estatus: 'estudiante'
};

//declaramos una funcion que extraiga la propiedad nombre del objeto

function imprimirNombre(persona) {
    //para invocar el nombre e imprimirlo en la funcion lo podemos hacer de dos maneras
    //MANERA 1 
    //var nombre = persona.nombre;

    //o lo podemos hacer de la siguiente manera

    var { nombre } = persona; //en este caso al poner entre las llaves el nombre le indicamos que queremos la porpiedad
    //nombre y la guarde en la variable local nombre
    //esto se llama destructuracion

    console.log(nombre);
}

imprimirNombre(carlos);