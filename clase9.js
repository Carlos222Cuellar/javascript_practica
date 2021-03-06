//si declaramos dos variables de la siguiente manera

var x = 4,
    y = '4';

//vemos que podemos declarar todo sin problemas si vamos al navegador podemos ver todo tambien sin problemas

/*  
Si hacemos comparaciones podemos ver lo siguiente
que si usamos el "=" sirve para asignar un valor a una variable
pero si queremos comparar dos valores podemos usar "=="
si pasamos en el navegador x==y va devolver true
porque va pasar x a string y lo va comparar con el otro valor de y para ver si son iguales
al hacer el == js lleva los dos valores a un mismo tipo de valor y los compara
pero si queremos preguntar si x e y tienen el mismo valor y el mismo tipo entonces hacemos lo siguiente
"==="

Es recomendable siempre usar el triple igual
*/

//Ahora vamos a ver como se comparta JS al comparar objetos

//declaramos dos objetos con el mismo contenido

var carlos = {
    nombre: 'carlos'
};

var otroCarlos = {
    nombre: 'carlos'
};

/*
al comparar los objetos ya sea con === o == da false ya que no hace lo mismo que con datos primitivos
lo que hace js es preguntar por su referencia si queremos que la referencia sea la misma para que al comparar de true
hacemos 

var otroCarlos = carlos
aqui decimos que carlos contiene lo mismo que otroCarlos porque los dos hacen referencia a la misma direccion de memoria

si vamos al navegador y le cambiamos el valor a otroCarlos tambien se cambiara en el objeto
carlos porque los dos apuntan a la misma direccion de memoria

pero si hacemos un desgloce del objeto como a continuacion

var carlos = {
nombre: 'carlos'

};

var otroCarlos = {
    ...carlos
}

se desglosa carlos en otroCarlos pero ya no son iguales ya que otroCarlos es otro objeto que apunta a otro
lado en la memoria


*/