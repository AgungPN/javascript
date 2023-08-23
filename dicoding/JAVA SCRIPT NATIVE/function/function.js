/* Document 
 function:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
arrow:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
// untuk parameter function bisa diisi tipe data apa saja, bahkan bisa diisi juga dengan fungsi lain
// for make comments jsDoc use /**

/** function declaration */
function sayHello(greet) {
  console.log(`${greet}!`)
}

/** function expression */
const sayName = function (name) {
  console.log(`Nama saya ${name}`)
}
sayHello("OI")
sayName("Agung")

/** object user untuk data user */
const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
}
/**jika parameter function merupakan object kita bisa menggunakan destructuring object */
function funcParamObj({ displayName, fullName }) {
  console.log(`${fullName}, biasa dipanggil ${displayName}`)
}
funcParamObj(user)

/**
 * kita bisa menggunakan spread operator untuk parameter, atau metode ini biasa disebut rest parmeter
 * @param  {...any} number
 * @returns
 */
function spreadFunc(...number) {
  let result = 0
  for (const num of number) result += num
  return result
}
console.log(spreadFunc(1, 2, 6, 4, 3, 21.5))

/* ARROW FUNCTION merupakan versi lain function expression, dan tidak bisa menggunakan this, tidak cocok untuk menjadi method, tidak bisa membuat constructor.
cocok untuk menunjukkan parent this saat menggunakan setInterval dan setTimeout*/

/** jika program hanya 1 baris, tidak perlu menulis return dan {}, jika hanya 1 parameter bisa dihapus () */
const fullName = (name) => `Nama lengkap saya: ${name}`
console.log(fullName("Agung Prasetyo Nugroho"))

const array = ["Agung", "Prasetyo", "Nugroho"]
const arrowObj = (nama) => ({ nama: nama, lenght: nama.length }) // arrow function return object
// console.table(arrowObj(array))
console.log(arrowObj(array))

/* SCOPE function dan variabel, kita bisa saja membuat fungsi didalam fungsi */

// global variable, dapat diakses pada parent() dan child()
// global function, dapat diakses secara global
function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  // local function, dapat diakses parent() dan child()
  let name = "Agung PN"
  function child() {
    return `my name is ${name}`
    // local variable, dapat diakses hanya pada fungsi child().
  }
  total = 10 // ini akan bersifat global, karena kita tidak mendeklarasikannya dengan let/var/const
  return child()
}
let total = 9
let string = parent()
console.log(total) // akan mencetak 10, bukan 9
console.log(string) // akan mencetak 10, bukan 9

/**
 * try to concat string with looping
 * @param {string} string this for string
 * @param {number} length for length loop
 * @author Agung Prasetyo Nugroho
 * @returns string after concat
 */
function loopConcat(string, length) {
  let concatString = ""
  for (let i = 0; i < length; i++) concatString += string + " "
  return concatString
}

console.log(loopConcat("hello", 10))
