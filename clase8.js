var carlos = {
    nombre: 'Carlos',
    edad: 24,
    estatus: 'Estudiannte'
};

function imprimirNombre(persona) {
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombre(carlos);

//supongaos que tenemos una funcion donde modificamos la edad de carlos

function aumentarEdad(persona) {
    persona.edad += 1;
}

//al invocar la funcion anterior desde un navegador o desde donde se pueda invocar vemos que la funcion afecta a nuestro
//objeto haciendo que la edad cambie pero si hace lo siguiente que pasara

function aumentarEdad1(edad) {
    edad += 1;
}

//al invocar la funcion anterior esta recibe como parametro la edad unicamente no el objeto entero
//por lo tanto no se modifica en si el objeto como tal si no solo la edad

//javascript se comporta diferente con los objetos que pasamos como
//parametro se pasan por referencia eso quiere decir que si los modificamos
//dentro del cuerpo de una funcion su valor tambien se va ver modificado fuera de esa funcion tambien


//para solucionar esto entonces hacemos dos cosas una es que 
//puede ser el caso de que queramos modificar el objeto en ese caso
//tenemos que dejar la funcion como esta
//y la otra solucion es que creemos un nuevo objeto que tendra lo mismo que el original
//aceptuando la edad que estara aumentada en uno

function aumentarEdad2(persona) {
    return {
        ...persona, //desglosamos a la persona en este nuevo objeto podemos incluso agregar nuevos elementos
        edad: persona.edad + 1
    }
    // persona.edad += 1;
}

aumentarEdad2(carlos);

//en conclusion nunca debemos modificar el estado del objeto  sino crear otro