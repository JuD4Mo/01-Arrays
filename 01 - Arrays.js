const arrayForFunctionsPeople = [
        {
            name: "Juan",
            lastName: "Muñoz",
            age: 19,
            birthDay: {
                year: 2005,
                month: "August",
                day: 27
            },
            favoriteFood: "Mom's food",
            hobbies: ["Gym", "Read", "Video Games"],
            occupation: "Engineer student"
        },
        {
            name: "Sofia",
            lastName: "García",
            age: 22,
            birthDay: {
                year: 2002,
                month: "March",
                day: 15
            },
            favoriteFood: "Sushi",
            hobbies: ["Painting", "Dancing", "Yoga"],
            occupation: "Art student"
        },
        {
            name: "Carlos",
            lastName: "Rodríguez",
            age: 25,
            birthDay: {
                year: 1999,
                month: "July",
                day: 9
            },
            favoriteFood: "Pizza",
            hobbies: ["Football", "Guitar", "Cooking"],
            occupation: "Software developer"
        },
        {
            name: "Elena",
            lastName: "Fernández",
            age: 21,
            birthDay: {
                year: 2003,
                month: "December",
                day: 3
            },
            favoriteFood: "Pasta",
            hobbies: ["Swimming", "Photography", "Reading"],
            occupation: "Medical student"
        },
        {
            name: "Juan",
            lastName: "Hernández",
            age: 27,
            birthDay: {
                year: 1997,
                month: "May",
                day: 20
            },
            favoriteFood: "Tacos",
            hobbies: ["Cycling", "Chess", "Movies"],
            occupation: "Software developer"
        },
        {
            name: "Ana",
            lastName: "Martínez",
            age: 30,
            birthDay: {
                year: 2004,
                month: "September",
                day: 11
            },
            favoriteFood: "Ice cream",
            hobbies: ["Singing", "Video games", "Fashion"],
            occupation: "Marketing student"
        },
        {
            name: "Alejandro",
            lastName: "Torres",
            age: 24,
            birthDay: {
                year: 2000,
                month: "June",
                day: 5
            },
            favoriteFood: "BBQ",
            hobbies: ["Basketball", "Writing", "Photography"],
            occupation: "Journalist"
        },
        {
            name: "Mariana",
            lastName: "López",
            age: 23,
            birthDay: {
                year: 2001,
                month: "November",
                day: 30
            },
            favoriteFood: "Seafood",
            hobbies: ["Writing", "Cooking", "Traveling"],
            occupation: "Chef"
        },
        {
            name: "Fernando",
            lastName: "Ramírez",
            age: 30,
            birthDay: {
                year: 1998,
                month: "February",
                day: 8
            },
            favoriteFood: "Steak",
            hobbies: ["Running", "Fishing", "Camping"],
            occupation: "Mechanical engineer"
        },
        {
            name: "Camila",
            lastName: "Gómez",
            age: 18,
            birthDay: {
                year: 2006,
                month: "October",
                day: 19
            },
            favoriteFood: "Chocolate cake",
            hobbies: ["Dancing", "Painting", "Music"],
            occupation: "High school student"
        }   
]

const arrayForFunctionsVehicles = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        type: "Sedan",
        fuel: "Gasoline",
        features: ["Air Conditioning", "Bluetooth", "Backup Camera"],
        price: 25000
    },
    {
        brand: "Ford",
        model: "F-150",
        year: 2023,
        type: "Truck",
        fuel: "Gasoline",
        features: ["4x4", "Towing Package", "Apple CarPlay"],
        price: 40000
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2023,
        type: "Sedan",
        fuel: "Electric",
        features: ["Autopilot", "Touchscreen", "Fast Charging"],
        price: 45000
    },
    {
        brand: "Honda",
        model: "CR-V",
        year: 2021,
        type: "SUV",
        fuel: "Hybrid",
        features: ["Sunroof", "Adaptive Cruise Control", "Heated Seats"],
        price: 32000
    },
    {
        brand: "Chevrolet",
        model: "Camaro",
        year: 2020,
        type: "Coupe",
        fuel: "Gasoline",
        features: ["V8 Engine", "Sport Mode", "Leather Seats"],
        price: 35000
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2022,
        type: "SUV",
        fuel: "Diesel",
        features: ["All-Wheel Drive", "Premium Sound System", "Heads-up Display"],
        price: 60000
    },
    {
        brand: "Hyundai",
        model: "Elantra",
        year: 2023,
        type: "Sedan",
        fuel: "Gasoline",
        features: ["Lane Assist", "Android Auto", "Wireless Charging"],
        price: 24000
    },
    {
        brand: "Jeep",
        model: "Wrangler",
        year: 2023,
        type: "SUV",
        fuel: "Gasoline",
        features: ["Removable Roof", "4x4", "Off-road Mode"],
        price: 48000
    },
    {
        brand: "Audi",
        model: "A6",
        year: 2022,
        type: "Luxury Sedan",
        fuel: "Hybrid",
        features: ["Luxury Interior", "Self-Parking", "Adaptive Suspension"],
        price: 55000
    },
    {
        brand: "Nissan",
        model: "Leaf",
        year: 2023,
        type: "Hatchback",
        fuel: "Electric",
        features: ["Eco Mode", "Regenerative Braking", "Navigation System"],
        price: 28000
    }
];

//Función length: Da como resultado el tamaño del arreglo.
const arrLength = arrayForFunctionsPeople.length; 
console.log(arrLength);

//Función at: Recibe un número entero como parámetro y lo utiliza para acceder a esa posición del array.
const obj5 = arrayForFunctionsPeople.at(4);
console.log(obj5);

//Función concat: Toma dos arrays y los concatena en uno solo, dando como resultado un nuevo array.
const newArr = arrayForFunctionsPeople.concat(arrayForFunctionsVehicles);
console.log(newArr);

//Función constructor: 


/*Función copyWithin: copia elementos dentro de un mismo array, sin modificar su longitud. Este método sobrescribe valores dentro del array sin agregar ni eliminar elementos.
sintaxis: array.copyWithin(target, start, end);
target → Índice donde comenzará a copiarse la secuencia.
start → Índice desde donde se copiarán los elementos (incluido).
end (opcional) → Índice hasta donde se copiarán los elementos (excluido).
Este método no crea un nuevo array, modifica al que es aplicado.
*/
const arrCopyWithin = ["lemon", "apple", "pinaple", "pear", "grapes", "tomato", "avocado"];
arrCopyWithin.copyWithin(2, 5);
console.log(arrCopyWithin)
arrCopyWithin.copyWithin(0, 4, 6);
console.log(arrCopyWithin);

//Función entries: se usa para obtener un iterador de pares clave-valor de un array. Devuelve un objeto Array Iterator.
const obj = arrayForFunctionsPeople.entries();
for (let [index, value] of obj) {
    console.log(index, value);
}

//Función every: Retorna true o false dependiendo si todos los elementos del array cumplen con la condición suministrada en el callback.
const everyoneAreYoung = arrayForFunctionsPeople.every(x => x.age < 25);
console.log(everyoneAreYoung);

//Función fill: Cambia todos los elementos del arreglo por un valor estático proporcionado. Retorna el arreglo modificado.
const arrGonnaBeFilled = [1,2,3,4,5,6,7,8];
arrGonnaBeFilled.fill(0);
console.log(arrGonnaBeFilled);

//Función filter: Busca los elementos del arreglo que cumplan la condición dada. Retorna el arreglo con dichos elementos.
const youngerPeople = arrayForFunctionsPeople.filter(x => x.age < 19);
console.log(youngerPeople);

//Función find: Busca el primer elemento del arreglo que cumpla la condición.del arreglo que cumpla la condición. Retorna el elemento del arreglo en su respectivo tipo de dato.
const agePersonYoungerThan = arrayForFunctionsPeople.find(x => x.age < 30);
console.log(agePersonYoungerThan);

//Función findIndex: Busca el primer elemento del arreglo que cumpla la condición y retorna la posición en la que se encuentra.
const firstIndexSoftwareDeveloper = arrayForFunctionsPeople.findIndex(x => x.occupation == "Software developer");
console.log(firstIndexSoftwareDeveloper);

//Función findLast: Busca el último elemento del arreglo que cumpla la condición. Retorna el elemento en su respectivo tipo de dato.

const lastHobbieWriting = arrayForFunctionsPeople.findLast(x => x.hobbies.find(j => j == "Writing"));
console.log(lastHobbieWriting);

//Función findLastIndex: Busca el último elemento del arreglo que cumpla la condición y retorna la posición en la que se encuentra.

const lastIndexWhoIs30 = arrayForFunctionsPeople.findLastIndex(x => x.age == 30);
console.log(lastIndexWhoIs30);

/*Función flat: crea un nuevo arreglo con todos los elementos de sub-array concatenados recursivamente hasta la profundidad dada.
La profundidad por defecto es 1 si no especifica en el argumento.
*/
const arrToFlat = [1, 2,[3, 4, [5, 6]]];
const newArrFlated = arrToFlat.flat();
console.log(newArrFlated);

//Función flatMap: Combina el uso de map() y flat() en un solo paso. Se usa para transformar cada elemento de un array y aplanar el resultado hasta una profundidad de 1.
const arrToMapAndFlat = [10, 20, 30, 40, 50, 60];
const result = arrToMapAndFlat.flatMap(x => [x, x * 2]);
console.log(result);

//Función forEach: Se usa para ejecutar una función en cada elemento de un array.
let sumAges = 0;
arrayForFunctionsPeople.forEach(x => sumAges += x.age);
console.log(sumAges);

/*Función includes: Determina si una matriz incluye un determinado elemento, devuelve true o false. 
arr.includes(searchElement[, fromIndex]) Este método compara referencias y no contenido.*/
const arrInclude = [1, 10, 100, 1000, 10000];
const has10 = arrInclude.includes(10); //const has10 = arrInclude.includes(10, 2); --> false
console.log(has10);

/*Función indexOf: Busca un elemento en un array y devuelve su posición (índice). 
Si el elemento no existe, devuelve -1. Compara referencias, no contenido.
El segundo parámetro que se agrega es el índice desde donde se quiere empezar a buscar.
*/
const arrIndexOf = [10, 20, 30, 40, 50, 60, 70, 80, 80, 80, 40, 600, 701, 300];
const indexOf80 = arrIndexOf.indexOf(80, 9);
console.log(indexOf80);

//Función join: Convierte los elementos de un array en un string, separándolos con el delimitador que puede ser escogido a gusto.
const namePeople = arrayForFunctionsPeople.map(x => x.name);
const strPeople = namePeople.join("->");
console.log(strPeople);

//Función keys: devuelve un iterador con las claves (índices) de un array.
let colors = ["Red", "Green", "Blue"];
let keysIterator = colors.keys(); 
for (let key of keysIterator) {
    console.log(key);
}

/*Función lastIndexOf: busca un elemento en un array y devuelve la última posición (índice) en la que se encuentra. Si no lo encuentra, devuelve -1.
array.lastIndexOf(elemento, fromIndex). El segundo parámetro es opcional.
*/
const arrPeopleName = arrayForFunctionsPeople.map(p => p.name)
const lastIndexOfJuan = arrPeopleName.lastIndexOf("Juan");
console.log(lastIndexOfJuan);

//Función map: Crea un nuevo array aplicando una función a cada elemento del array original sin modificar el array original.

const vehicleBrands = arrayForFunctionsVehicles.map(x => x.brand);
console.log(vehicleBrands)

//Función pop: Elimina y devuelve el último elemento de un arreglo.
const lastVehicle = arrayForFunctionsVehicles.pop();
console.log(lastVehicle);

//Función push: Agrega elementos al final de un array y devuelve la nueva longitud del array.
const newSize = arrayForFunctionsVehicles.push(    {
    brand: "BMW",
    model: "M5",
    year: 2023,
    type: "Luxury Sedan",
    fuel: "Gasoline",
    features: ["Leather Seats", "Adaptive Cruise Control", "Surround View Camera"],
    price: 105000
},
{
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2022,
    type: "Luxury Sedan",
    fuel: "Diesel",
    features: ["Heated Seats", "Lane Assist", "Panoramic Sunroof"],
    price: 65000
});
console.log(newSize);

/*Función reduce: Reduce todos los elementos de un arreglo a un único valor, aplicando una función acumuladora sobre cada elemento.
array.reduce((accumulator, currentValue, currentIndex, array) => 
    {Código para combinar los valores}, initialValue); */

const totalVehiclesPrice = arrayForFunctionsVehicles.reduce((acc, veh) => acc + veh.price, 0);
console.log(totalVehiclesPrice);

//Función reduceRight: Es similar a .reduce, con la diferencia de que recorre el arreglo de derecha a izquierda en lugar de izquierda a derecha.
const arrReduce = [1, 2, 3, 4, 5, 6, 7, 8];

const divReduce = arrReduce.reduce((acc, num) => acc/num)
const divReduceRight = arrReduce.reduceRight((acc, num) => acc/num)
console.log(divReduce);
console.log(divReduceRight);

/*Función reverse: Invierte el orden de los elementos en un arreglo in-place, lo que significa que el arreglo original 
se modifica directamente y se devuelve el mismo arreglo, pero con los elementos en orden inverso. */
console.log(arrayForFunctionsVehicles.reverse())

/*Función shift: Elimina el primer elemento de un arreglo y desplazar todos los demás elementos hacia un índice menor. 
Este método modifica el arreglo original y devuelve el elemento eliminado. */
const vehicleEliminated = arrayForFunctionsVehicles.shift();
console.log(vehicleEliminated);

/*Función slice: Crea una copia superficial de una porción de un arreglo, sin modificar el arreglo original. 
El arreglo resultante contiene los elementos seleccionados de acuerdo con los índices proporcionados.
array.slice([start], [end]); No incluye el valor proporcionado en end.
*/

const vehiclesSliced = arrayForFunctionsVehicles.slice(1, 2);
console.log(vehiclesSliced);

/*Función some: Verificar si al menos un elemento de un arreglo cumple con una condición especificada. 
Retorna true si al menos un elemento satisface la condición, y false si ninguno la cumple.
*/

const youngPerson = arrayForFunctionsPeople.some(person => person.age < 19);
console.log(youngPerson);

/*Función sort: Se utiliza para ordenar los elementos de un arreglo en su lugar, modificando el arreglo original.
Si no se específica cómo se desea ordenar, JavaScript transforma los elementos a texto, y los ordena ascendentemente.
*/
//Orden por nombre ascendentemente
arrayForFunctionsPeople.sort(function(a,b) {
    return a.name.localeCompare(b.name); 
});
console.log(arrayForFunctionsPeople);

//Orden por edad ascendentemente
arrayForFunctionsPeople.sort(function(a,b){
    return a.age - b.age;
});
console.log(arrayForFunctionsPeople);

/*Función splice: Modifica un arreglo, eliminando, agregando o reemplazando 
elementos en cualquier posición específica del arreglo. Este método cambia el arreglo original.
array.splice(start, deleteCount, item1, item2, ...);
*/
let numbers = [10, 20, 30, 40, 50];
const removed = numbers.splice(1, 2);
console.log(numbers);
console.log(removed);

/*Función toLocaleString: Convierte objetos en cadenas de texto de acuerdo con el formato y
las convenciones locales del navegador o el entorno de ejecución,teniendo en cuenta la configuración regional (localización).
*/

let numbersToChange = [123456.789, 987654.321, 50000.5];
console.log(numbersToChange.toLocaleString('es-ES')); 
console.log(numbersToChange.toLocaleString('en-US')); 

/*En es-ES (España), usa . como separador de miles y , como decimal.
En en-US (EE.UU.), usa , como separador de miles y . como decimal.*/

//Función toString: Convierte un arreglo en una cadena de texto, separando los elementos por comas. No modifica el array original.
const arrayToString = ["I", "Love", "Spacebar", "Tokenizer"];
const stringResult = arrayToString.toString();
console.log(stringResult);

//Función unshift: Agrega uno o más elementos al inicio de un arreglo y devuelve la nueva longitud del array.

console.log(arrayForFunctionsPeople.unshift({
    name: "Andrés",
    lastName: "Pérez",
    age: 21,
    birthDay: {
        year: 2003,
        month: "May",
        day: 14
    },
    favoriteFood: "Burgers",
    hobbies: ["Gaming", "Cycling", "Photography"],
    occupation: "Computer Science student"
}
));

//Función values: Se usa para obtener un iterador con los valores de un array. 
const hobbies = ["Dancing", "Painting", "Music"];
const iterator = hobbies.values();

for (let value of iterator) {
    console.log(value);
}

