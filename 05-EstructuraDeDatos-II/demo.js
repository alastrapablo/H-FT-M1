// function mascotas(nombre){

//     return function(tipo){
//         return console.log('Tu mascota se llama ' + nombre + ' y su tipo es ' + tipo);
//     }
// }

// const mascota = mascotas('Firulai')

// console.log(mascota);
// mascota('perro')

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


//contexto global
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
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// contarCorazones = 17
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());
// console.log(contadorcontarCorazones());

// const contarCorazones = contadorcontarCorazones();
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// corazones = 21
// console.log(corazones);
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());
// console.log(contarCorazones());

// const persona = {
//     nombre: 'Joaquin',
//     apellido:'Pineda',
//     edad:22,
// }

// const persona2 = {
//     nombre: 'Viviana',
//     apellido:'Villegas',
//     edad:24,
// }

// function datos(){
//     return(
//         "su nombre es " + this.nombre + ' ' + this.apellido + ' y tiene ' + this.edad + ' años.'
//     )
// }

// console.log(datos());




// console.log(persona2.datos());

// const nuevaPersona2 = datos.bind(persona2)
// const nuevaPersona = datos.bind(persona)
// console.log(nuevaPersona2());
// console.log(nuevaPersona());
// nuevaPersona()

function multiplicar(a, b) {
    return console.log(a * b);
}

let multiplicarPorTres = multiplicar.bind(this, 3)

multiplicarPorTres(5)

const persona = {
    nombre: 'Joaquin',
    apellido: 'Pineda',
    edad: 22,
}

let logNombre = function (arg1, arg2) {
    console.log(arg1 + ' ' + this.nombre + ' ' + this.apellido + ' ' + arg2);
}

// logNombre.call(persona, 'holiii', '¿Cómo estás?')
logNombre.apply(persona, ['holiii', '¿Cómo estás?'])