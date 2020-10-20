//las estructuras de control nos van a decir si un trozo de codigo se ejecuta o no o si se ejecuta multiples veces o si se ejecuta hasta que cumpla con una condicion
//si tenemos un objeto

var carlos = {
    nombre: 'Carlos',
    edad: 24,
    estatus: 'estudiante',
    ingeniero: false,
    miraAnime: true,
    cantante: false
};

//con los booleanos podemos comparar cosas de manera mas facil
//vamos a declarar un funcion que recibe un objeto.

function imprimirHobbies(persona) {
    //lo que queremos hacer es que imprima mis hobbies para eso tenemos que hacer
    console.log(` ${ persona.nombre } es: `); //tiene que llevar comillas invertidas
    if (persona.ingeniero) { // no tenemos que poner el triple igual ya que el if va devolver true si es true y como ya le asginamos true o false
        console.log('Es ingeniero');
    } else {
        console.log('No es ingeniero');
    }
    if (persona.miraAnime) {
        console.log('le gusta ver animne');
    }
    if (persona.cantante) {
        console.log(' canta');
    }
    if (persona.estatus === 'estudiante') //aqui si ponemos el === para comparar
    {
        console.log('Nota: no es ingeniero porque es un estudiante aun');
    }
}

imprimirHobbies(carlos); //invocamos la funcion y le pasamos el objeto carlos