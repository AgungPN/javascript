// let, var, const
/*
// don't use var anymore:  
https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/?msclkid=1fbeaef5d0cc11eca20d357b07f49d93
// var tidak boleh digunakan lagi karena itu memberikan banyak masalah, contohnya:
// sistem hoisting, akan menarik deklarasi variabel var ke atas sebelum dieksekusi

console.log(hello)  // undefiend karena hoisting
let hello = "Hello World"

// secara tidak langsung variabel akan ditarik keatas
var hello
console.log(hello)
hello = "hello World"

// dengan menggunakan let akan membuat program tersebut error seperti kebanyakan bahasa pemograman
console.log(hello)  //error
let hello = "hello world"

var hello = "Hello World"   // global variabel
if (hello) {
  var hello = "selamat pagi"   // local variabel
}
console.log(hello)   // selamat pagi (problem var lagi, membuat local variabel seperti global variabel)

// dengan let
let hello = "Hello World"   // global variabel
if (hello) {
  let hello = "selamat pagi"   // local variabel
}
console.log(hello)   // akan mencetak Hello World, dengan let lebih baik
*/

/* let lastName
let fullName = (lastName = "Nugroho")
console.log(fullName + " " + lastName)
fullName = "Agung Prasetyo " + "Nugroho"
console.log(fullName)

// const = konstanta => nilai tidak dapat dirubah
const PERMANENT = 10
let kosong
console.log(typeof (PERMANENT)) //typeof => untuk mengecek tipe data
console.log(typeof (kosong))  // undefined => untuk variabel yang belum diinisialisasi, NaN => bukan angka
let kosongNull = null
console.log(typeof (kosongNull)) //null tidak sama dengna undifind tapi null tidak memiliki nilai

//symbol
let unik1 = Symbol("id")
let unik2 = Symbol("id")
console.log(unik1 == unik2)  //akan mengembalikkan false, meskipun nilainya sama. Karena Symbol akan membuat nilai unik

let x = 0
console.log(x++)  // mengembalikan nilai sebelum ditambahkan
console.log(--x)  // mengembalikan nilai setelah dikurangi

const bigNumber = 1234567890123456789012345678901234567890n  // tambahkan n dibelakang untuk bigInt
// const myInt = 1234567890123456789012345678901234567890
// console.log(myInt)
console.log(bigNumber)

// operator pada bigInt
console.log(5n + 2n)
console.log(5n - 2n)
console.log(5n * 2n)
console.log(5n / 2n)  // tidak mengemabalikan 2.5n tapi 2n
console.log(5n % 2n)

// string => pada string (') dan (") tidak ada bedanya
let sayHallo = "Hallo"

console.log(sayHallo + " Agung")  // + untuk concat string
console.log(`${sayHallo} Agung`)  // gunakan (`) untuk membuat template string

// convert string to int
let str = '12345'
console.log(typeof(+str))  // simple convert
console.log(typeof(parseInt(str)))  // function convert
console.log(10+(+str)) */

const users = {
  name: "agung pn",
  progdi: "ti",
  fakultas: "fti",
  address: {
    dusun: "Wonolelo",
    desa: "Kadirejo",
    kecamatan: "Pabelan",
    kabupaten: "Semarang",
  },
}
console.log(users?.alamat?.kecamatan) // jika data tidak ditemukkan maka return undefiend bukan error
