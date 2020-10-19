var edad = 27;

/*si queremos incrementar esa edad se puede hacer de tres maneras

edad= edad+1;
edad += 1;
edad++;

y los mismo aplica para restar valores a un numero

*/

//como sumar dos numeros 

var numero1 = 5,
    numero2 = 5,
    resultado;

resultado = numero1 + numero2;

//ejemplo con decimales

var precioVino = 200.3;
//supongamos que queremos sumar tres vinos podemos hacer lo siguiente

var total = precioVino * 3; //el problema que no almacena los decimales
//de manera muy exacta para resolver eso podemos usar los siguiente

var total1 = precioVino * 100 * 3 / 100; //solo si estamos seguro que solo tiene un decimal

//si no estamos seguro entonces tenemos que hacer

var total3 = Math.round(precioVino * 100 * 3) / 100;

//si le queremos decir cuantos decimales tiene que tener despues del punto entonces hacemos

var total4 = total.toFixed(2);
//dentro de fixed especificamos cuantos decimales queremos que muestre

//pero lo anterior nos devuelven un string entonces si queremos un numero otra vez lo 
//transformamos de la siguiente manera

var total5 = parseFloat(total4); //a parseFloat le pasamos el string que queremos convertir a flotante(decimal)

//si tenemos una pizza y dos personas y queremos saber cuantas porciones les toca a cada uno entonces hacemos los siguiente

var pizza = 8,
    persona = 2,
    cantidadDePorciones;

cantidadDePorciones = pizza / 2;