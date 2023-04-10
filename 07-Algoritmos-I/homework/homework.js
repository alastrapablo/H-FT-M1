'use strict'

//* FACTOREAR
//Big-O = O(nlogn)
/*
 Factorear el número recibido como parámetro y devolver en un array los factores por los cuales
 se va dividiendo a dicho número (De menor a mayor).
 Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
*/

//1
function factorear(num) {
  let arr = [1];
  let divisor = 2;
  while (num > 1) {
    while (num % divisor === 0) {
      arr.push(divisor);
      num /= divisor;
    }
    divisor++;
  }
  return arr;
}

console.log(factorear(180));
console.log(factorear(45));

//2
function factorear(num) {
  let arr = [1];
  let divisor = 2;
  while (num > 1) {
    if (num % divisor === 0) {
      arr.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return arr;
}

console.log(factorear(180));
console.log(factorear(45));

//* BUBBLE SORT
//Big-O = O(n ** 2)
/* 
Implementar el método conocido como bubbleSort para ordenar de menor a mayorel array recibido como parámetro 
Devolver el array ordenado resultante
*/

//1
function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSort([2, 5, 1, 8, -7, 4, 22, 3]));

//2
function bubbleSort2(array) {
  let lengthArr = array.length
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < lengthArr; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
    lengthArr--
  }
  return array
}

console.log(bubbleSort2([8, 20, -2, 4, -6, 5, 1]))

//* INSERTION SORT
//Big-O = O(n ** 2)
/* Implementar el método conocido como insertionSort para ordenar de menor a mayor
el array recibido como parámetro utilizando arreglos
Devolver el array ordenado resultante */

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([2, 5, 1, 8, -7, 4, 22, 3]));

//* SELECTION SORT
//Big-O = O(n ** 2)
/* Implementar el método conocido como selectionSort para ordenar de menor a mayor
  el array recibido como parámetro utilizando dos arreglos
  Devolver el array ordenado resultante
 */

//1
function selectionSort(arr) {
  const arrLenght = arr.length;
  for (let i = 0; i < arrLenght; i++) {
    let min = i;
    for (let j = i + 1; j < arrLenght; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // let aux = arr[min]
    // arr[i] = arr[min]
    // arr[min] = aux
    // Intercambiar el valor mínimo con el primer elemento de la sublista no ordenada
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([2, 5, 1, 8, -7, 4, 22, 3, 1]));

//2
function selectionSort2(array) {
  let arr = array;
  let arrPosition = 0

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i]
    let m = Infinity
    let mPosition
    for (let j = arrPosition; j < arr.length; j++) {
      if (arr[j] <= n && arr[j] < m) {
        m = arr[j]
        mPosition = j
      }
    }
    arr[i] = arr[mPosition]
    arr[mPosition] = n
    arrPosition++
  }
  return arr
}

console.log(selectionSort2([2, 5, 1, 8, -7, 4, 22, 3, 1]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
