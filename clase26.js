//vamos usar jQuery para poder usar las peticiones al servidor de la API

//vamos almacenar la URL de la API a donde haremos peticiones en una const

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id'; //url para llamar a las personas en la API se le pasa un id que no conosemos pero luego se va reemplazar


//para poder hacer un requeste con jQuery llamamos al simbolo del dolar  punto get este recibe varios paramatros los cuales son 
//primer parametro es: la URL a la cual queremos acceder 
//el segundo es: un objeto se pasara {crossDomain: true} Este segundo parámetro es un objeto que le indica al método si el callback es local o remoto.
//el tercero es: nuestro callback que es una funcion que se va ejecutar en un futuro que puede que no se ejecute la cual va ser llamada por $.get


//para la URL de people queremos reemplazar el :id por un id valido para hacer peticiones por lo tanto usamos
//el metodo replace para reemplazarlo el cual recibe dos parametros primero lo que queremos quitar y luego con lo que lo queremos quitar

//Esto se puede optimizar usando variables en lugar de poner los parametros completos

//la funcinon callback puede recibir varios parametros al finalizar el request ejemplo la data el success
const URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const domain = { crossDomain: true };
$.get(URL, domain, function(data) {
    console.log(`Hola yo soy ${data.name}`);
});

//la funcion se va ejecutar solo si el request es exitoso si no no se ejecuta