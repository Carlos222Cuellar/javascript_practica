//nuevas caracteristicas

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()) //flat recibe la profudida si no le pasamos nada toma la primer porfundidas


//tambien esta flat map permite mapear un arrya luego le pasamos una funicon

let arrya11 = [1, 2, 3, 4];

console.log(array11.flatMap(value => [value, value * 2]));

//tambien trimStart permite eliminar los espacios al inicio de un string
//con el trimEnd eliminamos los del final

let string = '   hola'
console.log(string);
console.log(string.trimStart());


//tambien viene el opcional catch binding se puede pasar de forma opcional el errror 

//otro punto interesante es el fromEntries pasar un arreglo a objetos

let entries = [
    ["name", "carlos"],
    ["age", 24]
];

console.log(Object.fromEntries(entries));


//objeto de tipo symbol

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);