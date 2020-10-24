/**
 * teniendo en cuenta la clase anterior lo que queremos es que cuando se imprima
 * el saludo de una persona
 * el responda el saludo y le si es desarrollador que le diga a mira no sabia que eras desarrollador
 */





/**
 * 
 * @param {'recibe un nombre de la persona'} nombre 
 * @param {'recibe un apellido de la persona'} apellido 
 * @param {'recibe la altura de la persona'} altura 
 */

class Persona { //ya no declaramos la clase como function si no que con la palabra reservada class
    constructor(nombre, apellido, altura) { //en lugar de pasarle atributos a la funcion le indicamos que es un constructor

            //completamente igual con this 
            this.nombre = nombre; //son dos variables distintos this es un atributo y nombre es el parametro qyue recibimos    
            this.apellido = apellido;
            this.altura = altura;
            //return this; //no se pone esta implicito en js
        }
        //podemos declarar las propiedades de la clase aqui mismo sin la necesidad de crear una variable que haga referencia a una funcion
    saludar(fn) { //le pasamos una funcion como parametro a otra funcion
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
            if (fn) { //vamos a ver si existe la funcion para responder el saludo
                fn(this.nombre, this.apellido, false); //llamamos a la funcion

            }
        }
        /**
         * si queremos dejar de usar mucho el this en nombre y apellido podemos hacer lo siguiente
         * destructurar el this y se puede hacer de dos manera
         * primera
         * var nombre = this.nombre;
         * var apellido = this.apellido;
         *  segunda forma es lo mismo de la primera pero con menos codigo
         *  var {nombre, apellido} = this;
         */
        //agregar otro atributo para saber si es alto
    soyAlto() {
        return this.altura > 1.80;
    }
};


class Desarrollador extends Persona { //para heredar solo usamos la palabra reservada extends y luego escribimos quien es el padre
    constructor(nombre, apellido, altura) { //luego se hace los mismo que como con el padre
        super(nombre, apellido, altura); //ya no usamos el this porque no lo reconoce tendriamos que usar la palabra super
        //y alli pasar los parametros y listo si la necesidad de escribir el this
    }
    saludar(fn) { //aqui vamos a pasar la funcion como parametro de otra funcion
        console.log(`hola soy ${this.nombre} ${this.apellido} y soy un desarrollador`);

        //vamos a preguntar si la funcion se le paso si no se le paso para ver si responde el saludo
        if (fn) {
            fn(this.nombre, this.apellido, true); //llamamos a la funcion
        }
    }
};


//declaramos la funcion que va responder el saludo
function responderSaludo(nombre, apellido, esDev) {
    console.log(`mucho gusto ${nombre} ${apellido}`);
    if (esDev) { //si se la pasa el parametro esDev este va ser true y va imprimir esto si no no
        console.log("a mira no sabias que eras desarrolador");
    }
}

var carlos = new Persona('Carlos', 'Cuellar', 1.73);
var juan = new Desarrollador('Juan', 'Perez', 1, 90);

//llamando a la funcion respondersaludo

carlos.saludar(responderSaludo);
juan.saludar(responderSaludo);