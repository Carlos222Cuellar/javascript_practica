//como ejecuta JS codigo asincrono

//si tenemos
console.log('a');
console.log('b');
console.log('c');
//resultado 
//a
//b
//c


//si queremos realizar tareas en el futuro modificar el DOM
//moficar un titulo un boton
//cambiar algo con CSS o una alerta
//un request a una API
//Todo eso se hace de manera asincrona

//Si queremos que se ejecute algo en un tiempo especificado
//se hace con con setTimeout la cual recibe una funcion como parametro y un delay que esta 
//expresado en milisegundos

//Ejemplo

console.log('d');
setTimeout(() => console.log('e'), 2000);
console.log('f');

//orden de salida
//d
//f
//e

//Que pasara si en vez de los 2s quiero que se ejecute en cero segundos 
//SE ejecutaran
//d
//f
//e
//Siempre se ejecuta igual porque cuando llegue al
//setTimeout lo manda a la cola de tareas estas se ejecutaran luego de que las tareas principales del navegador
//cuando llegue al final del programa alli empieza a ejecutar la cola
//la funcion setTimeout recibe una funcion y un delay

setTimeout(() => console.log('zzzzzzZ'), 2000)
for (var i = 0; i < 10000000000; i++) {}

//JavaScript no va a ejecutar el console.log 
//hasta que no termine de ejecutar la sentencia for

//cuando hacemos una tarea asincrona nada nos garantiza
//que bloquea el "event loop" (la ejecucion del codigo)