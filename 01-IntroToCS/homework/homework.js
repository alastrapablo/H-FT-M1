'use strict';

function BinarioADecimal(num) {
   let res = 0
   let n = num.toString()
   n.split('').reverse().forEach((element, index) => {
      res += (element * 2 ** index)
   })
   return res;
}

console.log(BinarioADecimal(100110))

function DecimalABinario(num) {
   let bin = ''

   do {
      bin = (num % 2) + bin;
      num = Math.floor(num / 2);
   } while (num > 0);

   return bin;
}

console.log(DecimalABinario(0))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
}

 // let arr = num.toString().split('');
   // let dec = 0
   // let l = arr.length
   // for (let i = 0; i < arr.length; i++) {
   //    dec += arr[i] * (2 ** (l - 1))
   // }
   // return dec