///* perbedaan array dan objeck
//array untuk memanggil nilai menggunakan index urut, sedangkan objeck menggunakan key */
//
// let myArray = ["Coklat", 42.5, 22, true, "Programming"]
//let myArray2 = ["Cake", "Pie", "Donut"]
//console.log(myArray[10])   //jika kita memanggil index yang tidak ada maka akan mengembalikkan undefiend
//
//// fungsi-fungsi array
//// https://overapi.com/javascript
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?msclkid=880b8800d0ed11ec920b8bb98f9df19d

//console.log(myArray.length)  //menghitung panjang
//
//myArray.push("TES")  //menambahkan nilai paling akhir
//console.log(myArray)
//
//myArray.pop()  //menghapus 1 nilai paling akhir
//console.log(myArray)
//
//myArray.shift()  //menghapus 1 nilai paling awal
//console.log(myArray)
//
//myArray.unshift("awal baru")  //menambah 1 nilai paling awal
//console.log(myArray)
//
//delete myArray[1]  //hapus nilai, tapi hanya mengosongkan nilai pada index (empty)
//console.log(myArray)
//
//myArray = myArray.slice(2, 5)  //ambil data dari array ke 2-5
//console.log(myArray)

// myArray.splice(1,2)  // menghapus data dari array ke 1 sebanyak 2 data
// myArray.splice(1,2,"new Value")  // menghapus data dari array ke 1 sebanyak 2 data dan menggantinya menjadi "new Value"
// console.table(myArray)

//
//console.log(myArray.toString())  //convert to string
//
//myArray = myArray.join("-")   //join array menjadi string dengan -
//console.log(myArray)
//
//myArray = myArray.split("-")  // seperti fungsi explode pada PHP untuk memecah string menjadi array
//console.log(myArray);
//
//console.log(myArray.concat(myArray2))  //mengabungkan array/string

///* === SPREAD OPERATOR === */
//    console.log("\n\nSPREAD OPERATOR")
//console.log(myArray)   // mencetak didalam bentuk array []
//console.log(...myArray)  // mencetak data 1 per 1  === console.log(myArray[0],myArray[1],myArray[2])
//console.log([...myArray,...myArray2])  //marge array menggunakan spread operator, dan ini juga bisa untuk objeck
//

/* ========================== */
/* ====REUSABLE FUNCTION===== */
/* ========================== */

/* MAP, FILTER, AND reduce */
const angka = [1, 43, 2, 4, 3, 2]

/* pada MAP, FILTER, dan forEach memiliki parameter yang sama. ada 3, lihat di loop.js */

/* ambil nilai yang < 5 */
console.table(angka)
console.log(angka.filter((angka) => angka < 5)) // filter untuk memfilter/menyeleksi nilai dan mengembalikkan array baru

/* kalikan setiap angka dengan 2 */
console.log(angka.map((angka) => angka * 2)) //map untuk mengambil data satu2 dan melakukan suatu fungsi padanya dan mengembalikkan array baru

/* jumlahkan semua nilai */
// NOTE: accumulator = untuk hasil/total nilainya; current = untuk perdata di array; 0 = ( opsional ), untuk nilai awal penghitungan;
/* 
Callback function pada .reduce() memiliki 5 parameter yang dapat digunakan sesuai kebutuhan:
- total yaitu nilai awal (initial value) atau akumulasi dari perhitungan sebelumnya.
- value yaitu isi dari tiap elemen yang diproses.
- index (optional) yaitu nomor index tiap elemen.
- array (optional) yaitu array itu sendiri.
- initialValue (optional) yaitu nilai awal yang akan di passed sebagai initial value di poin 1. Dapat diisi apa saja (nomor, teks, array, atau object)

arr.reduce((total, value, index, array) => {
  // kode program
}, initialValue);
*/
console.log(angka.reduce((accumulator, current) => accumulator + current, 0))

/* method chaining = menggabungkan fungsi-fungsi  */
const chaining = angka
  .filter((angka) => angka < 5)
  .map((a) => a * a)
  .reduce((hasil, curr) => hasil + curr)
console.log(chaining)

/* SORT ARRAY */
console.log(angka.sort((a, b) => b - a))
const strArr = ["nama", "abc", "zzz", "aaa", "AAA"]
console.log(strArr.sort((a, b) => (a > b ? 1 : -1)))

/* indexOf */
let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel", "Mangga"]
/*  mengembalikkan index array yang bervalue "Apel", dimulai dari index 0(disini argument 0 opsional)
NOTE: jika ada nilai dengan value ganda, maka akan direturn index value pertama kali ditemukkan, return -1 jika tidak ditemukkan
*/
let indexApel = arrBuah.indexOf("Apel", 0)
console.log("indexOf: " + indexApel) // Output: 1
/* lastIndexOf, seperti indexOf tapi jika ada data sama maka akan diambil data dengan index terakhir, dan datanya akan dibaca dari index terakhir */
let lastIndexApel = arrBuah.lastIndexOf("Apel", 5)
/* findIndex() hampir mirip dengan find tapi return index, dan hampir mirip dengan indexOf() tetapi lebih fleksibel, karena bisa menggunakan function callback */
console.log("lastIndexOf: " + lastIndexApel) // Output: 3

/* find(), hampir mirip dengan filter, tapi hanya return 1 nilai saja. Untuk parameternya sama seperti forEach/map/filter */
let acak2 = [1, 4, 6, 8, 8, 99, 6, 10, 20]
const acak3 = acak2.find((x) => x == 8)

console.log(acak3) // find hanya mengambil 1 data

/* Some() seperti find, tapi return true/false */
const someIsHasEight = acak2.some((x) => x == 8)
console.log(someIsHasEight)

/* every() hampir mirip dengan some return true/false tapi jika semua data sesuai dengan kondisi baru return true */
const everyIsHasEight = acak2.every((x) => x == 8)
console.log(everyIsHasEight)
