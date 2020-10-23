//en esta clase vamos a tener un array y lo vamos a filtrar para eso se usara el metodo filter el cual 
//recibe una condicion y esta condicion es una funcion 

//declarando los objetos que tendra nuestro array

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

//ya que tenemos declarado nuestro array ahora queremos filtra las personas que son altas miden mas de 1.8
//para eso usaremos el metodo filter

//arrow function
const esAlto = ({ altura }) => altura >= 1.8; //la funcion toma la propiedad altura del array personas
//y pregunta quien mide mas de eso y se lo devuelve a filter que es el encargado de proporcionar el array 

var filtrarAltos = personas.filter(esAlto); //lo que va devolver esto es otro array sin modificar el anterior
//se tiene que declarar la funcion que realiza la condicion

//imprimir las personas altas
console.log(filtrarAltos);



//tambien puedo mejorar el codigo si hago lo siguiente

var filtroAltos = personas.filter(function({ altura }) {
    altura >= 1.8;
});

//el codigo funcionara igual pero es un poco mas dificil de leer que declarandolo aparte

console.log(filtrarAltos); //imprimiendo los altos