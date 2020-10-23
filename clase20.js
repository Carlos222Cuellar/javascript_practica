/*

Hablar de objetos en javascript es hablar de prototipos.
this hace referencia al nuevo objeto que se acaba de crear.
la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.

*/
//vamos a hacer un prototipo de persona que solo puede decir su nombre y hola
//funcion tipo constructora
function Persona(nombre, apellido) {
    //console.log('me ejecutaron');

    //para guardar los parametros que acabamos de crear usamos this

    this.nombre = nombre; //son dos variables distintos this es un atributo y nombre es el parametro qyue recibimos    
    this.apellido = apellido;
    //return this; no se pone esta implicito en js
}

//var carlos = new Persona(); //new solo se usa con proptotipos en este caso persona

//new seguida del prototipo crea un objeto
//se le puden pasar parametros
//this hace referencia l objeto que se acaba de contruir

//ejemplo

var carlos = new Persona('carlos', 'cuellar');

//tenemos que indicarle al prototipo que va existir
//un atributo saludar qu va ser una funcion

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

//si quisieramos una funcion que salude por ejemplo

var miguel = new Persona('miguel', 'perez');
var juan = new Persona('juan', 'ponce');
//ya podemos ir al navegador y jugar con ellos

carlos.saludar(); //hola soy carlos cuellar