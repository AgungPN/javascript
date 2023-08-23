/* 
higher order function adalah fungsi yang beroperasi pada fungsi lain baik itu sebagai parameter, maupun sebagai return.
javascript memperlakukan function sebagai sebuah object


contoh high order function bawaan javascript:
array.map(function(){})
array.filter()
array.reduce()
array.forEach()
array.find()
array.some()
array.every()
....
// lihat cara menggunakan di file array.js pada folder `structur data`
*/

const isEven = (n) => n % 2 == 0
const checkNum = (evenFunc, num) => { // checkNum is higher order function
  const even = evenFunc(num) // callback (call other function)
  return `the number ${num}, is an even number: ${even}`
}
console.log(checkNum(isEven, 3))
