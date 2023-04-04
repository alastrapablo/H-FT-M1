/*
    1. crear el nodo padre, la raíz
    para crear la raíz:
*/

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/*
    2. Ingresar información a nuestro árbol.
    si(raíz del árbol es igual al valor que vamos a ingresar){
        opción 1: lo enviamos a la izq o a la der
        opción 2: no recibo números repetidos, envío un mensaje
    }
    si(raíz del árbol es mayor al valor que vamos a ingresar){
        si(no hay un nodo izq){
            el valor que recibimos lo agregamos al nodo izq
        }
        sino {
            aplicamos recursión, llamando nuevamente el método agregar, sin olvidarnos de pasarle el parámetro.
        }
    }
    sino (raíz del árbol es menor al valor que vamos a ingresar) {
        si(no hay nodo derecho){
            agregamos el valor al nodo derecho
        }
        sino {
             aplicamos recursión, llamando nuevamente el método agregar, sin olvidarnos de pasarle el parámetro.
        }
    }
*/

BinarySearchTree.prototype.add = function (value) {
    if (value === this.value) return 'Ya existe, solo valores únicos'
    if (value < this.value) {
        if (!this.left) {
            let newTree = new BinarySearchTree(value)
            this.left = newTree;
        }
        else {
            this.left.add(value)
        }
    }
    else {
        if (!this.right) {
            let newTree = new BinarySearchTree(value)
            this.right = newTree;
        }
        else {
            this.right.add(value)
        }
    }
}

BinarySearchTree.prototype.search = function (value) {
    if (value === this.value) return this.value;
    if (value < this.value && this.left !== null) {
        return this.left.search(value)
    }
    if (value > this.value && this.right !== null) {
        return this.right.search(value);
    }
    else {
        return 'Valor no encontrado'
    }
}

let tree = new BinarySearchTree(8);
tree.add(4);
tree.add(3);
tree.add(5);
console.log(tree);
console.log(tree.search(3));

