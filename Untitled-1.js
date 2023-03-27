//

var creaFuncion = function () {
    var arreglo = [];

    for (var i = 0; i < 3; i++) {
        arreglo.push(
            function () {
                console.log(i);
            }
        )
    }
    return arreglo;
}

var arr = creaFuncion();

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3


var creaFuncion = function () {
    var arreglo = [];
    for (var i = 0; i < 3; i++) {
        arreglo.push(
            (function (j) {
                return function () { console.log(j); }
            }(i))
        )
    }
    return arreglo;
}

var arr = creaFuncion();

arr[0]() // 1
arr[1]() // 2
arr[2]() // 3



function crearNAnimal(nombre) {
    return function (tipo) { console.log(nombre + " es un " + tipo); }
}

let insNombre = crearNAnimal('Lio')

insNombre('Gato')



function hacerSaludo(lenguaje) {
    return function () {
        if (lenguaje === 'en') {
            console.log('Hi!');
        }

        if (lenguaje === 'es') {
            console.log('Hola!');
        }
    }
}

var saludoIngles = hacerSaludo('en');
var saludoEspaniol = hacerSaludo('es');





function mascotas(nombre) {

    return function (tipo) {
        return console.log('Tu mascota se llama ' + nombre + ' y su tipo es ' + tipo);
    }
}

const mascota = mascotas('Firulai')

console.log(mascota);
console.log(typeof mascota);

mascota('perro')


// var crearFuncion = function(){
//     var arreglo = [];
//     for (let i = 0 ; i < 7 ; i++) {
//         arreglo.push(function(){
//             console.log(i);
//         })
//     }
//     return arreglo;
// }


// var arr = crearFuncion();
// arr[0]();//0 - 3 - undefined
// arr[1]();//1 - 3
// arr[2]();//2 - 3
// arr[3]();//2 - 3
// arr[4]();//2 - 3
// arr[5]();//2 - 3
// arr[6]();//2 - 3




// contexto global
// function contadorcontarCorazones(){
//     let corazones = 0;
//     return function(){
//         corazones++
//         return corazones
//     }
// }
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// // contarCorazones = 17
// console.log(contadorcontarCorazones());


// const contarCorazones = contadorcontarCorazones();
// console.log(contarCorazones());
// console.log(contarCorazones());
// corazones = 21
// console.log(corazones);
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());


const persona = {
    nombre: 'Joaquin',
    apellido: 'Pineda',
    edad: 22,
}


const persona2 = {
    nombre: 'Viviana',
    apellido: 'Villegas',
    edad: 24,
}


function datos() {
    return (
        "su nombre es " +
        this.nombre + ' ' +
        this.apellido + ' y tiene ' +
        this.edad + ' años.'
    )
}


console.log(datos());

// console.log(persona2.datos());


const nuevaPersona2 = datos.bind(persona2)
const nuevaPersona = datos.bind(persona)
console.log(nuevaPersona2());
console.log(nuevaPersona());
nuevaPersona()


function multiplicar(a, b) {
    return console.log(a * b);
}


let multiplicarPorTres = multiplicar.bind(this, 3)

console.log(multiplicarPorTres(5));



// const persona = {
//     nombre: 'Joaquin',
//     apellido:'Pineda',
//     edad:22,
// }
// ​
// let logNombre = function(arg1, arg2){
//     console.log(arg1 + ' ' + this.nombre + ' ' + this.apellido + ' ' + arg2);
// }
// ​
// // logNombre.call(persona, 'holiii', '¿Cómo estás?')
// logNombre.apply(persona, ['holiii', '¿Cómo estás?'])












function cacheFunction(cb) {
    let cache = {}

    return function (arg) {
        if (cache.hasOwnProperty(arg)) {
            console.log(cache);
            return cache[arg]
        }

        const result = cb(arg);
        cache[cb.name + ' ' + arg] = result;   /* [cb.name + ' ' + arg] */
        console.log(cache);
        return result;
    }
}

function sumita(n) {
    return n + 10
}

let sumaCache = cacheFunction(sumita)
console.log(sumaCache(2));
console.log(sumaCache(2));
console.log(sumaCache(6));


function square(n) {
    return n * n;
}

const squareCache = cacheFunction(square);

console.log(squareCache(2));
console.log(squareCache(6));









var instructor = {
    nombre: 'Franco',
    edad: 25,
};

var alumno = {
    nombre: 'Juan',
    curso: 'FullStack',
    getNombre() {
        return this.nombre;
    }
};

function getNombre() {
    return this.nombre;
}

let getPrueba = alumno.getNombre.bind(instructor)
console.log(getPrueba());
// let getNombreInstructor = getNombre.bind(instructor);
// let getNombreAlumno = getNombre.bind(alumno);


/*fsdfsd
*/
Practice
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena, nombre) {
    return delimitadorIzquierda + cadena + nombre + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*", 'hola ');
let textoGuiones = crearCadena.bind(null, "-", "-");
let textoUnderscore = crearCadena.bind(null, "_", "_");

let cadena1 = textoAsteriscos('juan')
let cadena2 = textoGuiones("hola ", 'juan')
let cadena3 = textoUnderscore("hola")
console.log(cadena1);
console.log(cadena2);
console.log(cadena3);
