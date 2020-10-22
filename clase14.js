//el while nos permite repetir un codiho hasta que se cumpla la condicion.
var carlos = {
    nombre: 'Carlos',
    edad: 24,
    estatus: 'estudiante',
    peso: 90
};

console.log(`el peso de ${carlos.nombre} es de ${carlos.peso}kg`);

//se va simular que hay un reto de bajar 3kg y el programa nos va decir el numero de dias que se tardo en hacerlo
//const BAJAR_PESO = 0.40; //va bajar 300gr cuando haga ejercicio
const SUBIR_O_BAJAR = 0.30; //va subir 400gr cuando coma mucho
var dias = 0 //contador para ver cuantos dias se tarda en bajar de peso los 3kg
const META = carlos.peso - 3; //va serel peso al que se tiene que llegar

var comerMucho = persona => persona.peso += SUBIR_O_BAJAR; //va sumar los gramos para el aumento de peso
var haceEjercicio = persona => persona.peso -= SUBIR_O_BAJAR; //va restar los gramos para disminuir de peso
var bajarDePeso = () => Math.random() < 0.3; //arrow function mientras el numero sea menor a los 0.30 va devolver true para bajar de peso
var subirDePeso = () => Math.random() < 0.4; //arrow function mientras el numero sea menor a los 0.40 va devolver true para subir de peso


while (carlos.peso > META) { //mientras el peso sea mayor de la meta el ciclo se sigue ejecutando

    if (bajarDePeso()) {
        haceEjercicio(carlos);

    } else if (subirDePeso()) {
        comerMucho(carlos);
    }
    dias += 1;
}

console.log(`El numero de dias que se tardo en bajar 3kg es: ${dias}`);