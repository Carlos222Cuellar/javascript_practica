//el ciclo do-while se diferencia de while porque este repite el codigo aunque sea una vez

//se va hacer un programa para ver cuantas veces voy a ver si esta lloviendo

var contador = 0; //contador para ver las veces que fui a ver si estaba lloviendo

var lluve = () => Math.random() < 0.25; //suponiendo que llueve el 25% de las veces

//vamos a declarar nuestra sentencia do-while el cual ejecutara por lo menos una vez el codigo

do {
    contador = contador + 1;
} while (!lluve()); //si lo funcion devuelve false es que llueve entonces se niega para convertirlo a true y que entre en el ciclo

//imprimir el resiltado de tal manera que imprima el numero de veces que fui y que imprima 1 vez si solo fui a ver una vez si llovia

if (contador === 1) {
    console.log(`fui a ver que llovia una vez`);
} else {
    console.log(`fui a ver si llovia ${contador} veces`);
}