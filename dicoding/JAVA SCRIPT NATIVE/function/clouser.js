/* clouser itu seperti membuat fitur visibility private, yang mana akan membuat fungsi didalam fungsi dan fungsi tersebut mengakses data didalam parent fungsi */

// without clouser
let result = 0
const add = () => ++result
console.log(add())
console.log(add())
result = 10
console.log(add()) // jika kita rubah nilai result maka nilai di add akan berubah

// with clouser
// versi 1

/** for clouser to make private variabel  */
// const addCount = () => {
//   let result = 0
//   return () => ++result   // fungsi di return tidak akan dijalankan langsung, karena langsung direturn
// }
// const addCounter = addCount()  // fungsi addCounter akan menjalankan fungsi di return pada fungsi addCount

// //versi 2 (nama metodenya = IIFE)
const addCounter = (() => {
  let result = 0
  return (message) => `${message}, count: ${++result}`
})()

console.log(addCounter("message"))
console.log(addCounter("pesan"))
result = 10
console.log(addCounter("ini argument")) // meskipun nilainya result telah dirubah tidak akan mengefek pada fungsi
