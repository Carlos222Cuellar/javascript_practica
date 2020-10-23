//metodo reduce lo que hace es reducir el array a un valor unico

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

//se agrego en el array la cantidad de libros que han leido

// y queremos saber cuantos libros tienen entre todos juntos

//se puede hacer con un cliclo for o con reduce

const contarLibros = (acumulado, { cantidadDeLibros }) => acumulado = acumulado + cantidadDeLibros;

var totalLibros = personas.reduce(contarLibros, 0); //reduce recibe dos parametros la funcion que coniene la condicion y tambien recibe el contador en este caso inicializado en cero

//imprimir la cantidad de libros

console.log('la cantidad total de libros es: ' + totalLibros);