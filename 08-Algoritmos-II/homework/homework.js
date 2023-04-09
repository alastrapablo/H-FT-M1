'use strict'
// No cambies los nombres de las funciones.

//* QUICK SORT
//1
function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 1, 4, 2, 8, 10, -20, 4]));
console.log(quickSort([10, -2, -7, 4]));

//2
function quickSort2(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  let sortedLeft = quickSort2(left)
  let sortedRight = quickSort2(right)
  let result = []
  for (let i = 0; i < sortedLeft.length; i++) {
    result.push(sortedLeft[i])
  }
  result.push(pivot)
  for (let i = 0; i < sortedRight.length; i++) {
    result.push(sortedRight[i])
  }
  return result
}

console.log(quickSort2([5, 1, 4, 2, 8, 10, -20, 4]));
console.log(quickSort2([10, 10, 16, 12]));

//3
function quickSort3(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante

  let randomNumber = Math.floor(Math.random() * (array.length))
  console.log(randomNumber);

  let newArr = []
  let arr = array
  let left = []
  let right = []
  let pivot = arr[randomNumber]

  //Separador
  for (let i = 0; i < arr.length; i++) {
    if (i !== randomNumber) {
      if (arr[i] < arr[randomNumber]) {
        left.push(arr[i])
      }
      if (arr[i] > arr[randomNumber]) {
        right.push(arr[i])
      }
    }
  }

  function containsOnlyDuplicates(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) {
        return false;
      }
    }
    return true;
  }

  if (left.length > 1 || !containsOnlyDuplicates(left)) { left = quickSort3(left) }
  if (right.length > 1 || !containsOnlyDuplicates(right)) { right = quickSort3(right) }

  newArr = left.concat([pivot]).concat(right)

  return newArr
}

console.log(quickSort3([2, 5, 1, 8, -7, 4, 22, 3, 1]));

//* MERGE SORT
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  let newArr = []


  return newArr
}

console.log(mergeSort([2, 5, 1, 8, -7, 4, 22, 3, 1]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
