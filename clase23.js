/**
 * 
 * @param {'recibe un nombre de la persona'} nombre 
 * @param {'recibe un apellido de la persona'} apellido 
 * @param {'recibe la altura de la persona'} altura 
 */

/**
 * 
 * imaginemos que queremos o mas bien dicho tenemos otro constructor que es hijo del constructor persona 
 * por ejemplo desarrollador como podemos hacer que herede al padre desarrollador ya que en js
 * en si no hay clases no puede haber una herencia como en los otros lenguajes como java
 * por lo tanto lo que se hace es un herencia prototipal
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
    saludar() {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        }
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
    saludar() {
        console.log(`hola soy ${this.nombre} ${this.apellido} y soy un desarrollador`);
    }
};