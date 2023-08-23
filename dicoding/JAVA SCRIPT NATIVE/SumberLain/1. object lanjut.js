/* MEMBUAT BEBERAPA OBJECT DENGAN STRUKTUR YANG SAMA */
/* 1. versi object literal */
// kurang efektif untuk object yang banyak karena kita akan menggulang2 program yang sama
/*
const literalMhs1 = {
  nama: "Agung",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi 
    console.log(`Hallo ${this.nama}, selamat makan!`)
  }
}
const literalMhs2 = {
  nama: "prasetyo",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi 
    console.log(`Hallo ${this.nama}, selamat makan!`)
  }
}
// mahasiswa 1
literalMhs1.makan(10)
console.log(literalMhs1)
// mahasiswa 2
literalMhs2.makan(15)
console.log(literalMhs2) 
*/



/* 2.1 versi functional deklaration */
// dengan function deklaration akan lebih singkat karena kita membuat templete dulu, tapi dibelakang layar kita sama saja membuat object 2x
/*
 function mahasiswa({ nama, energi }) {
  const obj = {}
  obj.nama = nama
  obj.energi = energi
  obj.makan = function (porsi) {
    this.energi += porsi    
    console.log(`Hallo ${this.nama}, selamat makan!`)
  }
  return obj
}
// mahasiswa 1
const mahasiswa1 = mahasiswa({ nama: "agung", energi: 10 })
mahasiswa1.makan(20)
// mahasiswa 2
const mahasiswa2 = mahasiswa({ nama: "Prasetyo", energi: 10 })
mahasiswa2.makan(25)
console.table({ mahasiswa1,mahasiswa2 }) 
*/


/* 2.2.1 versi functional deklaration dengan 1 template object */
// dengan ini akan lebih menghemat memory karena object di templateObj hanya diload 1x, tapi masih manual untuk menghubungkan antara template dengan funcMahasiswa
/* 
const templateObj = {
  makan: function (porsi) {
    this.energi += porsi
    console.log(`Hallo ${this.nama}, selamat makan!`)
  },
  tidur: function (jam) {
    this.energi += jam * 2
    console.log(`Hallo ${this.nama}, selamat tidur!`)
  }
}
function funcMahasiswa(nama, energi) {
  const obj = {}
  obj.nama = nama
  obj.energi = energi
  obj.makan = templateObj.makan
  obj.tidur = templateObj.tidur
  return obj
}
// mahasiswa 1
const mahasiswa1 = funcMahasiswa("agung", 10)
mahasiswa1.makan(20)
mahasiswa1.tidur(2)
// mahasiswa 2
const mahasiswa2 = funcMahasiswa("Prasetyo", 10)
mahasiswa2.tidur(1)
console.table({ mahasiswa1, mahasiswa2 }) 
*/



/* 2.2.2 versi functional deklaration dengan Object.create()  */
// Object.create()  akan menghubungkan template dengan function secara otomatis, jadi jika ada object baru di template tidak perlu manual menambahkan. 
// Object.create() itu seperti inheritance yang mewarisi sifat dari parent

/* const templateObj = {
  makan: function (porsi) {
    this.energi += porsi
    console.log(`Hallo ${this.nama}, selamat makan!`)
  },
  tidur: function (jam) {
    this.energi += jam * 2
    console.log(`Hallo ${this.nama}, selamat tidur!`)
  }
}
function funcMahasiswa(nama, energi) {
  const obj = Object.create(templateObj)  // menghubungkan funcMahasiswa dengan tempalteObj
  obj.nama = nama
  obj.energi = energi
  // obj.makan = templateObj.makan  // otomatis
  // obj.tidur = templateObj.tidur
  return obj
}
// mahasiswa 1
const mahasiswa1 = funcMahasiswa("agung", 10)
mahasiswa1.makan(20)
mahasiswa1.tidur(2)
// mahasiswa 2
const mahasiswa2 = funcMahasiswa("Prasetyo", 10)
mahasiswa2.tidur(1)
console.table({ mahasiswa1, mahasiswa2 })  */



/* 3. versi constructor */

/*
  function Mahasiswa({ nama, energi }) {
  this.nama = nama
  this.energi = energi
  this.makan = function (porsi) {
    this.energi += porsi    
    console.log(`Hallo ${this.nama}, selamat makan!`)
  }
}
// mahasiswa 1
const mahasiswa1 = new Mahasiswa({ nama: "agung", energi: 10 })
mahasiswa1.makan(20)
// mahasiswa 2
const mahasiswa2 = new Mahasiswa({ nama: "Prasetyo", energi: 10 })
mahasiswa2.makan(25)
console.table({ mahasiswa1,mahasiswa2 })  
*/




/* PROTOTYPE */
// ini versi class sebelum ES6 (sebelum ditambahkan keyword class)
/* function Mahasiswa(nama, energi) {
  this.nama = nama
  this.energi = energi
}
// membuat prototype, jadi tidak perlu membuat template dengan membuat variabel baru
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi
  return `Hallo ${this.nama}, selamat makan!`
}
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2
  return `Hallo ${this.nama}, selamat tidur!`
} */

// VERSI sesudah ada keyword class
/* class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama
    this.energi = energi
  }
  makan(porsi) {
    this.energi += porsi
    return `Hallo ${this.nama}, selamat makan!`
  }
  tidur(jam) {
    this.energi += jam * 2
    return `Hallo ${this.nama}, selamat tidur!`
  }
}

// Cetak hasil
const mahasiswa1 = new Mahasiswa("Agung", 50)
console.log(mahasiswa1.makan(10))
console.log(mahasiswa1.tidur(5))
const mahasiswa2 = new Mahasiswa("Nugroho", 30)
console.log(mahasiswa2.makan(10))
console.log(mahasiswa2.tidur(5))
 */
// End materi prototype