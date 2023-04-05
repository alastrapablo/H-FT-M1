'use strict';

/* EJERCICIO
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera 
                      de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order").
                      Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

//? Ejemplo
let myTree = new BinarySearchTree(10);

//* SIZE 
// Retorna la cantidad total de nodos del árbol

//1
BinarySearchTree.prototype.size = function () {
   let size = 1

   if (this.left) { size += this.left.size() }

   if (this.right) { size += this.right.size() }

   return size
}

//2
BinarySearchTree.prototype.size = function () {

   if (this.left === null && this.right === null) return 1

   if (this.left && this.right) return 1 + this.left.size() + this.right.size()

   if (this.left === null) return 1 + this.right.size()

   if (this.right === null) return 1 + this.left.size()
}

//? Ejemplo
console.log(myTree.size());

//* INSERT
// Agrega un nodo en el lugar correspondiente

BinarySearchTree.prototype.insert = function (value) {
   //if (value === this.value) return 'Ya existe, solo valores únicos'
   if (value < this.value) {
      if (!this.left) {
         let newTree = new BinarySearchTree(value)
         this.left = newTree;
      }
      else { this.left.insert(value) }
   }

   else {
      if (!this.right) {
         let newTree = new BinarySearchTree(value)
         this.right = newTree;
      }
      else { this.right.insert(value) }
   }
}

//? Ejemplo
myTree.insert(7);
myTree.insert(5);
myTree.insert(2);
myTree.insert(6);
myTree.insert(11);
myTree.insert(15);
console.log(myTree.size());
console.log(myTree);

//* CONTAINS
// Retorna true o false luego de evaluar si cierto valor existe dentro del árbol

//1
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) return true;

   if (value < this.value && this.left) {   /*this.left !== null*/
      return this.left.contains(value)
   }

   if (value > this.value && this.right) {
      return this.right.contains(value);
   }

   else { return false }
}

//2
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) return true;

   if (value < this.value) {
      if (!this.left) return false;
      return this.left.contains(value);
   }

   if (value > this.value) {
      if (!this.right) return false;
      return this.right.contains(value);
   }
};

//? Ejemplo
console.log(myTree.contains(11));
console.log(myTree.contains(12));
console.log(myTree);

//* Depth First For Each 
/* Depth First For Each 
      Recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
       según se indique por parámetro ("post-order", "pre-order", o "in-order").
      Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto. */

//1
BinarySearchTree.prototype.depthFirstForEach = function (cb, recorrido) {
   if (recorrido === "in-order" || !recorrido) {
      //nodo izquierdo --> nodo padre --> nodo derecho
      this.left && this.left.depthFirstForEach(cb, recorrido);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, recorrido);
   }

   if (recorrido === "post-order") {
      //nodo izquierdo --> nodo derecho --> nodo padre
      this.left && this.left.depthFirstForEach(cb, recorrido);
      this.right && this.right.depthFirstForEach(cb, recorrido);
      cb(this.value);
   }

   if (recorrido === "pre-order") {
      //nodo padre --> nodo izquierdo --> nodo derecho
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, recorrido);
      this.right && this.right.depthFirstForEach(cb, recorrido);
   }
};

//2 
// BinarySearchTree.prototype.depthFirstForEach = function (cb, recorrido) {
//    if (recorrido === "in-order" || !recorrido) {
//       //nodo izquierdo --> nodo padre --> nodo derecho
//       if (this.left) { this.left.depthFirstForEach(cb, recorrido); }
//       cb(this.value);
//       if (this.right) { this.right.depthFirstForEach(cb, recorrido); }
//    }

//    if (recorrido === "post-order") {
//       //nodo izquierdo --> nodo derecho --> nodo padre
//       if (this.left) { this.left.depthFirstForEach(cb, recorrido); }
//       if (this.right) { this.right.depthFirstForEach(cb, recorrido); }
//       cb(this.value);
//    }

//    if (recorrido === "pre-order") {
//       //nodo padre --> nodo izquierdo --> nodo derecho
//       cb(this.value);
//       if (this.left) { this.left.depthFirstForEach(cb, recorrido); }
//       if (this.right) { this.right.depthFirstForEach(cb, recorrido); }
//    }
// };

//3
// BinarySearchTree.prototype.depthFirstForEach = function (order) {
//    let arr = []
//    if (order === 'in-order' || !order) {

//       while (this.left && value > this.left && !arr.includes(this.left.value)) {
//          this.left.depthFirstForEach(order)
//          arr.push[value]
//       }

//       while (this.right && value < this.right && !arr.includes(this.left.value)) {
//          this.right.depthFirstForEach(order)
//          arr.push[value]
//       }
//    }
// }

//? EJEMPLO Depth First For Each 
//? Push

let array = [];
myTree.depthFirstForEach(function (value) { array.push(value) }, "in-order");
console.log(array);

let array2 = [];
myTree.depthFirstForEach(function (value) { array2.push(value) }, "post-order");
console.log(array2);

let array3 = [];
myTree.depthFirstForEach(function (value) { array3.push(value) }, "pre-order");
console.log(array3);

//? Console.log()

myTree.depthFirstForEach(function (value) {
   console.log(value);
}, "in-order");

//* Breadth First For Each
// Recorre el árbol siguiendo el orden breadth first (BFS)


BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr) {
   if (!arr) { var arr = [] }

   cb(this.value);
   this.left && arr.push(this.left);
   this.right && arr.push(this.right);

   arr.length && arr.shift().breadthFirstForEach(cb, arr);
};

//? EJEMPLO Breadth First For Each

//? CB
function printNodeValue(nodeValue) {
   console.log(nodeValue);
}
myTree.breadthFirstForEach(printNodeValue)


//! ARRAY
// var visitedNodes = [];
// myTree.breadthFirstForEach(printNodeValue, visitedNodes);
// console.log(visitedNodes);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
