//para alterar un array se usa el metodo map() que itera cada uno de los elementos de un array

//map devuelve otro array modificado en cada elemento que le indicamos

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
};

//declarando nuestro objeto que tendra los objetos declarados anteriormente

var personas = [sacha, alan, martin, dario, vicky, paula];

//queremos que la altura de la spersonas que esta en metros la pase a centimetros para eso usamos map

const pasarACms = persona => ({
    ...persona, //se desglosa el array para convertirlo en otro array diferente
    altura: persona.altura * 100
}); //es una arrow function que recibe el array personas y lo itera cambiando la altura
//luego retorna otro array diferente
//siempre que queramos devolver un objeto en una arrow function ponemos entre parentesis 
//y luego las llaves y dentro el codigo

var nuevasAlturasACms = personas.map(pasarACms); //iteramos el array persona y le cmabiamos la altura a todos

console.log(nuevasAlturasACms); //imprimimos