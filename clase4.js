var nombre = 'carlos',
    edad = 24;

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`);
}
//en el bloque anterior declaramos una funcion que no recibe parametros

imprimirEdad(); //invocamos la funcion

//las funciones nos sirven para reutilizar codigo esto se logra cuando la funcion acepta parametros.

//ejemplo

function imprimerEdadParametros(n, m) {
    console.log(`${n} tiene ${m} años`);
}