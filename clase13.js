var carlos = {
    nombre: 'carlos',
    edad: 24,
    peso: 80
};

console.log(`el peso de ${carlos.nombre} es ${carlos.peso}Kg`);

//vamos adeclarar la funcion que nos aumenta el peso o nos disminuye
const AUMENTO_DISMINUCION = 0.2;

var aumentarPeso = persona => persona.peso += AUMENTO_DISMINUCION;
const disminuirPeso = persona => persona.peso -= AUMENTO_DISMINUCION;

for (var i = 1; i <= 365; i++) { //el for recibe tres parametros la variable inicida luego punto y como obligatorio y luego la condicion y luego el aumento
    var ramdon = Math.random(); //va devolver un valor entre 0 y 1
    if (ramdon < 0.25) { // el 25 por ciento de los valores aumenta de peso
        //aumenta de peso
        disminuirPeso(carlos);
    } else if (ramdon < 0.5) { //entre el 25 y 50 por ciento de los valores rebaja
        //disminuye de peso
        aumentarPeso(carlos);
    }
}

console.log(`el peso de ${carlos.nombre} al final del año es ${carlos.peso.toFixed(1)}Kg`);