var carlos = {
    nombre: 'Carlos',
    edad: 24,
    estatus: 'estudiante'

};

//asi se declara un objeto en js puede contener 
//varias propiedades y sus valores
//podemos declarar cuantos objetos queramos

var dario = {
    nombre: 'Dario',
    edad: 78,
    estatus: 'estudiante'

};

//lo podemos usar en una funcion sin ningun problema

// function imprimirNombreEnMayusculas(persona) {
//     persona = persona.toUpperCase();
//     console.log(persona);
// }

// imprimirNombreEnMayusculas(carlos.nombre);

//pero la funcion tambien puede recibir de paramatro un objeto y esta pueda acceder al nombre como por ejemplo

function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase(); //se usa var porque no esta declarada la variable nombre tambien en este caso la persona seria el objeto  y tenemos que acceder al nombre de este objeto

    console.log(nombre); //tambien podemos acceder al nombre de una vez en el console.log y nos ahorramos una linea
    //console.log(persona.nombre.toUpperCase());//imprime lo mismo que arriba
}

imprimirNombreEnMayusculas(dario); //le pasamos el objeto sin acceder a la propiedad nombre ya que este va ser accedido desde la funcion

//Tambien existe otra forma para invocar la propiedad nombre en la funcion es de la siguiente manera

function imprimirNombreMayuscula({ nombre }) { //entre las llaves colocamos el nombre de la propiedad a la cual queremos acceder
    console.log(nombre.toUpperCase());
}

imprimirNombreMayuscula(carlos); //le pasamos el objeto a la funcion
//tambien podemos definir un objeto en una funcion ejemplo

//imprimirNOmbreMayuscula({nombre:'pepito'})
//pero no podemos enviar la funcion sin parametro
//igualmente no le podemos mandar un objeto con la propiedad incorrecta va dar error por que no va encontrar la propiedad solicitada por la funcion