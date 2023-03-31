"use strict";

/* Definir las funciones recursivas nFactorial y nFibonacci.
 
   Como ejercicio adicional y completamente opcional, al terminar
    de resolver este problema pueden intentar definir funciones
    que logren los mismos resultados pero de manera iterativa.
*/

/* nFactorial(n)
debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial
(representado como n!) es el producto de n por todos los números naturales menores que él y mayores
a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
*/

function nFactorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * nFactorial(n - 1)
}

console.log(nFactorial(5));

//ITERANDO

function nFactorialIter(n) {
  let factorial = 1

  for (let i = n; i > 1; i--) {
    factorial *= i
  }

  return factorial
}

console.log(nFactorialIter(4));

/* nFibonacci(n)
 debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1,
 respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que 
 se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*/

function nFibonacci(n) {
  if (n < 2) {
    return n
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2)
}

console.log(nFibonacci(8));

//ITERANDO
//For
function nFibonacciIter(n) {
  let fibonacci = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
  }
  return fibonacci[fibonacci.length - 1]
}

console.log(nFibonacciIter(8));



/* Queue
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  let items = [];

  this.enqueue = function (element) { return items.push(element) };
  // Queue.prototype.enqueue = function (element) { this.items.push(element) }

  this.dequeue = function () { return items.shift() };
  // Queue.prototype.dequeue = function (element) { this.items.shift() }

  this.size = function () { return items.length };
  // Queue.prototype.enqueue = function (element) { this.items.length }
}

//TODO
// Crear una nueva instancia de la cola
let queue = new Queue();

// Agregar elementos a la cola
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');

// Obtener el tamaño de la cola
console.log(queue.size()); // Output: 3

// Remover elementos de la cola
console.log(queue.dequeue()); // Output: 'first'
console.log(queue.dequeue()); // Output: 'second'

// Obtener el tamaño de la cola después de remover elementos
console.log(queue.size()); // Output: 1

// Agregar más elementos a la cola
queue.enqueue('fourth');
queue.enqueue('fifth');

// Remover todos los elementos de la cola
console.log(queue.dequeue()); // Output: 'third'
console.log(queue.dequeue()); // Output: 'fourth'
console.log(queue.dequeue()); // Output: 'fifth'

// Obtener el tamaño de la cola después de remover todos los elementos
console.log(queue.size()); // Output: 0

// Tratar de remover elementos de una cola vacía
console.log(queue.dequeue()); // Output: undefined
//TODO


//! CON Constructor


// class Queue {
//   constructor() {
//     this.arr = [];
//   }

//   enqueue(element) { this.arr.push(element) }

//   dequeue() { return this.arr.shift() }

//   size() { return this.arr.length }
// }

// //TODO
// // Crear una nueva instancia de la cola
// let queue2 = new Queue();

// // Agregar elementos a la cola
// queue2.enqueue('first');
// queue2.enqueue('second');

// // Obtener el tamaño de la cola
// console.log(queue2.size());

// // Remover elementos de la cola
// console.log(queue2.dequeue()); // firstItem === 'first'
// console.log(queue2.dequeue()); // secondItem === 'second'

// // Obtener el tamaño de la cola
// console.log(queue2.size()); // queueSize === 0
// //TODO

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};