const somethingWillHappen = () => { //funicon de que algo va pasar
    return new Promise((resolve, reject) => { //asi se declara una nueva promesa la cual recibe como paramtro una funcion con do sparamtros uno por si se resuelve y otro por no se rechaza
        if (true) {
            resolve('Hey'); //si se resuleve manda la solucion de hey
        } else {
            reject('Whooops!') //si no se resuelve manda esto 
        }
    });
};

//la vamos a ejecutar

somethingWillHappen()
    .then(response => console.log(response)) //es la respuesta le paso una funcion en este caso la impimo
    .catch(error => console.log(error)) //si pasa por el reject o si falla

//si lo quiero ejecutar tengo qye crear un scrip en la package.json con node


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => { resolve('True') }, 2000)
        } else {
            const error = new Error('Whooooops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))



//correr varias promesas a la ves se usa e promiseAll

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("array of results", response);
    })
    .catch(error => {
        console.log(error);
    })