function heredaDe(prototipoHijo, prototipoPadre) { //siempre va recibir al hijo primero y luego al padre como parametros
    //lo que vamos hacer es asignarle un prototipo padre al prototipo hijo
    var fn = function() {}; //definir una funcion vacia no hace nada y es anonima y se suele asignar a la variable fn o la variable noop es decir no hace nada

    //a esta funcion le vamos a asignar a su prototipo el prototipo padre
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn; //le decimos al prototipoHijo que su prototipo va ser un nuevo objeto de la funcion que creamos
    prototipoHijo.prototype.constructor = prototipoHijo; //asignar la funcion constructora si no se agrega se va estar llamando al cosntructor del padre
};



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


function Persona(nombre, apellido, altura) {


    this.nombre = nombre; //son dos variables distintos this es un atributo y nombre es el parametro qyue recibimos    
    this.apellido = apellido;
    this.altura = altura;
    //return this; //no se pone esta implicito en js
};

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

//agregar otro atributo para saber si es alto
Persona.prototype.soyAlto = function() {
    return this.altura > 1.80;
};

//los atributos en js siempre van antes de que las invoquemos si no nos dara error

//si queremos declarar otro constructor que queremos que herede de otro siempre lo hacemos despues
//del padre y los prototipos

function Desarrollador(nombre, apellido) {
    this.apellido = apellido;
    this.nombre = nombre;
};

heredaDe(Desarrollador, Persona); //llamamos la funcion y le pasamos al hijo y al padre
//esta la tenemos que llamar despues del prototipo hijo si no no va funcionar
//llamaria la funcion de persona

Desarrollador.prototype.saludar = function() {
    console.log(`hola soy ${this.nombre} ${this.apellido} y soy un desarrollador`);
};

//por ejemplo si queremos que Desarrollador tenga tambien el prototipo de soyAlto lo que tenemos que hacer es lo soguiente
//al inicio del codigo vamos a declarar una funcion vayamos al inicio a verla

//ejemplo
var carlos = new Persona('carlos', 'cuellar', 1.73);
//si quisieramos una funcion que salude por ejemplo

var miguel = new Persona('miguel', 'perez', 1.80);
var juan = new Persona('juan', 'ponce', 1.88);
//ya podemos ir al navegador y jugar con ellos

carlos.saludar(); //hola soy carlos cuellar