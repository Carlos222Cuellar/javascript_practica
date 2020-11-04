//caracteristicas agregadas a ecmascript 8

//se agrego Asyc y Await

//lo primero que veremos es Object.entries devuelve las claves y los valores de una matriz ejemplo

const data = {
    fronted: 'oscar',
    backend: 'isabel',
    desing: 'ana'
};

//transformar el obejeto a matriz

const entries = Object.entries(data);
console.log(entries); //ya nos regresa una matriz

//y ahora ya podemos ver cuantos elemtos tenemos

//Object value nos devuelve los valores de un objeto a un arreglo

const data1 = {
    fronted: 'oscar',
    backend: 'isabel',
    desing: 'ana'

}

//ahora usare el object value para transformar

const value = Object.values(data1); //La O va en mayuscula tambien se puede usar el valor length

console.log(value);

//otro de los puntos que se han añadido es el padding quer sirve para añadir mas caracteres a una cadena ya sea al final o al inicio

const string = 'Hello';
console.log(string.padStart(7, 'hi')); //añade al inicio hi
console.log(string.padEnd(7, 'hi')); //añade al final hi

//el primer valor es cuantos caracteres va tener despues de lo que quiero agregar

//tambien se agrego el asyn await

//primero creamos una funcion hacemos una promesa y luego la invocamos

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ?
        setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test Error'))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//la manera correcta de manejar el asyn await es la siguiente

const helloAsync2 = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log('Dio error algo ');

    }
}

helloAsync2();