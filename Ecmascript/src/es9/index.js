//nuevas caracteristicas agregadas 

//operador de reposo puede extraer elementos de objetos que aun no hemos construido

const obj = {
    name: 'carlos',
    age: 23,
    status: 'hola'
};

let { name, ...all } = obj;
console.log(name, all);

//por ejemplo si quiero imprimir todo menos el name pueod llamar solo a all si necesidad de hacer otro objeto
console.log(all);

//otro elemnto es usando la caracteristica de propagacion podemos unir varios objetos a otros


const obj1 = {
    name: 'carlos',
    age: 23,
    status: 'hola'
};

const obj2 = {
    name: 'luis',
    age: 32,
    status: 'hola'
};

//ahora podemos crear otro objeto en base a otro

const objet3 = {
    ...obj2,
    status: 'salu'
}

console.log(objet3)


//otra caracterisctica es promesa.finallu para saber cuando ha terminado una promesa

const hello = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        resolve('hola'): reject(new error('error'))
    })
}

//lo que haciamos es

hello()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizado')) //cuando tood termine lo muestra