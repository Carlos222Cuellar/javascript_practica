const doSomethingAsync = () => { //nuestra arrow function
    return new Promise((resolve, reject) => { //retornamos la nueva promesa que recibe dos parametros lo que son el resolve y el reject
        (true) ? //si es verdadero es decir si se cumple la pormesa va imprimir un mensaje diciendo algo
        setTimeout(() => {
                resolve('Do something Async');
            }, 3000): // si no se resuleve mandamos un mensaje de error diciedno dond eestuvo el error y se lo mostranos a l usuario
            reject(new Error('Test Error'));
    });
};

const doSomething = async() => { //una constante donde se hara el async con la palabra reservada async
    const something = await doSomethingAsync(); //usamos la palabra reservada await para decirle que espere a que se cumpla la promesam que invocamos
    console.log(something); //imnprimimos la promesa si se resuleve
}

console.log('Before'); //antes de llamar a la funcion async await
doSomething(); //llamando a la funcion
console.log('After'); //despues de llamar a la funcion


//capturar errores  siempre haciendo uso de sync await
const anotherFunction = async() => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1'); //antesd de ser invocada
anotherFunction(); //invocamos a la funcion donde usamos async await
console.log('After 1'); //despues de ser invocada