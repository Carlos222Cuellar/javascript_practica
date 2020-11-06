const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/' //por convenio se usa en mayusculas para indicar que no no ca a cambiar

const anotherFunction = async(url_api) => {
    try {
        //traer la data general de los personajes
        const data = await fetchData(url_api);
        //traemos el personaje
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        //traemos el origen del personaje
        const origin = await fetchData(character.origin.url);

        //ahora los vamos a imprimir
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('before');
anotherFunction(API);
console.log('after');