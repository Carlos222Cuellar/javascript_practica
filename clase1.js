var nombre = 'carlos',
    apellido = 'cuellar';

var nombreMayusculas = nombre.toUpperCase(); //pasar a mayusculas las letras

var nombreMinusculas = nombreMayusculas.toLowerCase(); //pasar a minusculas las letras

var primeraLetraDelNombre = nombre.charAt(0); //como ver un caracter en cierta posicion
var cantidadDeLetras = nombre.length; //saber cuantos caracteres tiene una cadena

var nombreCompleto = nombre + ' ' + apellido; //cancatenar string

var nombreCompleto2 = `${nombre} ${apellido}`; //concatenar string con interpolacion de texto
//en las llaves se puede escribir tambien codigo de JS por ejemplo si quiero pasar el apellido a mayusculas

var str = nombre.substr(1, 2)
    //acceder a un sub string de un string mas grande

var ultimaLetra = nombre.charAt(nombre.length - 1);