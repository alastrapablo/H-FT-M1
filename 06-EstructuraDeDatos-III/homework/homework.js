'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}


//* SIZE 
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

//* INSERT
BinarySearchTree.prototype.insert = function (value) {
   if (value === this.value) return 'Ya existe, solo valores únicos'

   if (value < this.value) {
      if (!this.left) {
         let newTree = new BinarySearchTree(value)
         this.left = newTree;
      }
      else {
         this.left.insert(value)
      }
   }

   else {
      if (!this.right) {
         let newTree = new BinarySearchTree(value)
         this.right = newTree;
      }
      else {
         this.right.insert(value)
      }
   }
}

//* CONTAINS
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) return true;

   if (value < this.value && this.left !== null) {
      return this.left.contains(value)
   }

   if (value > this.value && this.right !== null) {
      return this.right.contains(value);
   }

   else { return false }
}

//* Depth First For Each 
BinarySearchTree.prototype.depthFirstForEach = function (order) {
   let arr = []
   if (order === 'in-order' || !order) {

      while (this.left && value > this.left && !arr.includes(this.left.value)) {
         this.left.depthFirstForEach(order)
         arr.push[value]
      }

      while (this.right && value < this.right && !arr.includes(this.left.value)) {
         this.right.depthFirstForEach(order)
         arr.push[value]
      }
   }
}

// BinarySearchTree.prototype.depthFirstForEach = function (order) {
//    if (order === 'pre-order') console.log(this.value);
//    if (this.left) this.left.depthFirstForEach(order);
//    if (order === 'in-order' || !order) console.log(this.value);
//    if (this.right) this.right.depthFirstForEach(order);
//    if (order === 'post-order') console.log(this.value);
//  }


BinarySearchTree.prototype.breadthFirstForEach = function () {

}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
