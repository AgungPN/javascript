/* creating phase pada GLobal content */

/* 
visualisasi:  https://pythontutor.com/
atau debug untuk visualisasi
*/

/*
 Hoisting (mengerek fungsi dan variabel ke atas program dieksekusi)
  nama var = undefiend  (secara default variabel2 akan pindahkan ke atas dan diberi nilai default undefiend)
  nama function = fn()   (secara default fungsi juga akan dipindahkan ke atas, dan nilainya sesuai isi function. Karena itulah kita bisa mengeksekusi fungsi sebelum dideklarasikan)

  window = global object
  this = sebagai window
*/

// execution phase
/* console.log(nama)  // undefiend
var nama = "Agung"  // jika variabel menggunakan var maka default akan undefiend
myFunc()   // akan tetap tereksekusi karena hoisting, function di pindahkan ke atas
function myFunc() {
  console.log("Hello World")
}
 */

/* 
fungsi membuat Local Execution content 
yang didalamnya terdapat creation dan execution phase
otomatis menjalankan:
window
arguments
hoisting
*/

console.log(sayHello("pagi", true))
function sayHello(hello) {
  console.log(arguments) // semua argument yang dikirim
  // disini akan melakukan hoisting seperti pada global
  return `Hello selamat ${hello}, ${arguments[1]}`
}
