// // *arreglos:
// let arr = [1, 2, 'emanuel', true] //-> elementos.

// // arr[2] //'emanuel'

// // *objetos:
// let obj = {
//     a: 1,
//     b: 'emanuel',
//     c: true
// } // propiedades.

// // obj.a
// // obj['a']

// // * Lista enlazadas

// //Lista -> nodo1 -> nodo2 -> nodo3

// function Node(info) {
//     this.info = info;
//     this.next = null;
// }

// function List() {
//     this.head = null;
//     this._length = 0;
// }

// // * Método agregar
// List.prototype.add = function (info) {
//     let node = new Node(info);
//     console.log(node);
//     let current = this.head;

//     //si nuestra lista está vacía
//     if (current === null) {
//         this.head = node;
//         this._length++;
//         return node;
//     }
//     //si ya hay un nodo o hay muchos, es decir no es null, así que debo recorrer
//     //hasta el último (el último será el que en su siguiente sea null)
//     while (current.next) {
//         current = current.next;
//     }

//     current.next = node;
//     this._length++;
//     return node;
// }

// let lista = new List();
// lista.add('Victor')
// lista.add('Keybian')
// lista.add('Pablo')

// console.log(lista);


// List.prototype.getAll = function () {
//     let current = this.head //iniciamos por el head;

//     //si la lista está vacía
//     if (!current) {
//         console.log('La lista está vacía');
//         return;
//     }
//     //si no está vacía
//     while (current) {
//         console.log(current.info);
//         current = current.next;
//     }
//     return;
// }

// lista.getAll()



// let nodo1 = new Nodo('Renato')
// let nodo2 = new Nodo('Agustín')

// nodo1.next = nodo2

// console.log(nodo1);












let longitud = 20;
let contenedor = [];

let persona1 = {
    dni: 123456,
    nombre: 'Pablo',
    articulo: 'Lentes'
}

let persona2 = {
    dni: 456159,
    nombre: 'Danna',
    articulo: 'mochila'
}

function hashGuardarCositas(dni, nombre) {
    return (nombre.length + dni) % longitud;
}

let indice = hashGuardarCositas(persona1.dni, persona1.nombre);

contenedor[indice] = persona1.articulo;

console.log(contenedor);

let buscarArticulo = hashGuardarCositas(persona1.dni, persona1.nombre)

console.log(buscarArticulo);

console.log(contenedor[buscarArticulo]);





