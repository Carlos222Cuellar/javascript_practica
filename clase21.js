/*

Hablar de objetos en javascript es hablar de prototipos.
this hace referencia al nuevo objeto que se acaba de crear.
la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.

*/
//vamos a hacer un prototipo de persona que solo puede decir su nombre y hola
//funcion tipo constructora
function Persona(nombre, apellido, altura) {
    //console.log('me ejecutaron');

    //para guardar los parametros que acabamos de crear usamos this

    this.nombre = nombre; //son dos variables distintos this es un atributo y nombre es el parametro qyue recibimos    
    this.apellido = apellido;
    this.altura = altura;
    //return this; //no se pone esta implicito en js
};

//var carlos = new Persona(); //new solo se usa con proptotipos en este caso persona

//new seguida del prototipo crea un objeto
//se le puden pasar parametros
//this hace referencia l objeto que se acaba de contruir

//tenemos que indicarle al prototipo que va existir
//un atributo saludar que va ser una funcion

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

//agregar otro atributo para saber si es alto
Persona.prototype.soyAlto = function() {
    return this.altura > 1.80;
};

//ejemplo
var carlos = new Persona('carlos', 'cuellar', 1.73);
//si quisieramos una funcion que salude por ejemplo

var miguel = new Persona('miguel', 'perez', 1.80);
var juan = new Persona('juan', 'ponce', 1.88);
//ya podemos ir al navegador y jugar con ellos

carlos.saludar(); //hola soy carlos cuellar


/******************************************************************************************************
 * Window es el objeto global dentro del navegador.
 *
 * Cuando this no es lo que esperamos, este es el principal error en JS.
 *
 * En las Arrow functions, se asigna la función , pero cambia el this dentro de la función , ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.
 *
 * Para comprobarlo en consola:
 *
 * this === window
 * Es decir que si en el prototipo del constructor hacemos una arrow function en lugar de una funcion norma 
 * el ambito de this cambiara ya qye this hara referencia a windows que es el objeto del la ventana en el
 * navegador en cambio si uso la funcion en la prototipo este si apuntara la funcion constructor dentro de
 * nuestro codigo en JS es algo a tener en cuenta porque es un error bastante comun
 * 
 * 
 * 
 *                                        
 ********************************************************************************************************/


/**
  * acá están los apuntes de esta clase, intentare mejorarlos para simplificarlos y compartir con ustedes el documento word, al final de este curso para que tengan un complemento, recordar que esto debemos aprenderlo de memoria debido a que son los fundamentos, así que no solo te quedes con los videos, si no quieres tomar apuntes, acá los comparto contigo, lo importante es que siempre los leas y practiques bastante para crear una base solida.

EL CONTEXTO DE LAS FUNCIONES: Quien es this
Ahora bien, quedamos en la clase anterior en un error, ahora para solventarlo, vamos a analizar el código.
Siguiendo los procedimientos realizados en la anterior clase, lo que hicimos para que dejara de funcionar el código fue pasar la funcion a un arrow function. Por lo que para solventar esto usaremos una herramienta de la que obtuvimos conocimientos en clases anteriores, la cual es llamada “debugger”;

persona.prototype.soyAlto = () => {
    debugger
    return this.altura >= 1.80
}

Y trataremos de acceder a la función soy alto en la consola, que pasara aca, aca el código va a parar donde colocamos la opción debugger, allí echaremos un vistazo a “this” y nos mostrara que this es “window” y window es el objeto global dentro del navegador, aca están todos los atributos que están en window, entonces si nos fijamos en todo completo, es decir “this.altura” nos dira undefined por lo que undefined nunca va a ser igual a 1.80 por eso es que todas las personas que no son altas, esta condición nunca se va a dar.

Ahora ¿Qué es lo que pasa aca con las arrow funcitons?, primero que nada, esto de que this no es lo esperábamos que fuese es uno de los errores más comunes de javascript. Ahora vamos a lo que venimos, a explicar el porque;

persona.prototype.soyAlto = () => {
    debugger
    return this.altura >= 1.80
}

Acá como podemos observar esta arrow function, cumple con el primer objetivo, el cual es asignar la funcion, pero a su vez cambia el this dentro de la funcion, lo que hace es que this va a puntar al valor del this que este fuera de la funcion, por lo que ya llegado a este punto y explicado lo anterior con la consola respecto a Window, este toma el valor de this en el espacio global, es decir toma el valor del this que es window y como le estamos diciendo que tome el valor de “this.altura” su valor será undefined porque el window no existe un valor asignado a “this.altura”
Por ello cuando usemos this, debemos usar funciones normales, o al menos por el momento, mas adelante veremos como solucionar realmente este problema o como trabajar aca con las arrow functions.
  */