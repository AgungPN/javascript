// deklarasi object
const mhs = {
  // properti (variabel didalam object)
  nama: "agung",
  umur: 17,
  ips: [3.82, 3.89, 4.0],
  // method (fungsi didalam object)
  ipk: function () {
    let result = 0,
      localIps = this.ips
    for (let i = 0; i < localIps.length; i++) {
      result += localIps[i]
    }
    return result / localIps.length
  },

  // object in object
  ["alamat"]: {
    rt: "16" ,
    rw: "06" ,
    desa: "Kadirejo",
    dusun: "Wonolelo",
  },
}

// calling object
console.log(mhs.nama) // v1
console.log(mhs["nama"]) //v2
console.log(mhs.ipk())
console.log(mhs.alamat.dusun)

// MEMBUAT OBJECT PADA JAVASCRIPT

/* 1. Cara 1 Object Literal */
const mhs1 = {
  nama: "agung",
  age: 17,
  nim: 343425,
}
const mhs2 = {
  nama: "prasetyo",
  age: 17,
  nim: 6564645,
}
console.table((mhs1, mhs2))

/* 2. Cara 2 function deklaration */
function createObjectMahasiswa(nama, age, nim) {
  const mhs = {}
  mhs.nama = nama
  mhs.age = age
  mhs.nim = nim
  return mhs
}
console.log(createObjectMahasiswa("agung2", 13, 54354))
console.log(createObjectMahasiswa("prasetyo2", 15, 33333))

/* 3. constructor function (fungsi khusus untuk mengolah object, seerti class karena untuk memanggil perlu "new") */
function Mahasiswa(nama, age, nim) {
  // const this = {}   // tidak perlu melakukan ini karena sudah otomatis
  this.nama = nama
  this.nama = nama
  this.nim = nim
  // return this   // tidak perlu melakukan ini karena sudah otomatis
}
const mahasiswa1 = new Mahasiswa("Agung3", 17, 672021077) // panggil ditambahin "new", seperti memanggil class pada OOP
console.log(mahasiswa1)

/* THIS */
/* object saat ini, jika this diakses di scope global maka this === window */

// this pada function deklaration
/* 
function thisDeklaration() {
    console.log(this)   // akan mengembalikkan object global/ window
}
thisDeklaration() 
*/

// this pada object literal
/* 
let obj = {}
obj.thisLiteral = function () {  
    console.log(this)  // akan mengembalikkan object variabel obj
}
obj.thisLiteral() 
*/

// this constructor
/*
 function ThisConstructor() {
    console.log(this)   // akan mengembalikkan object new/baru 
}
let objectBaru1 = new ThisConstructor()
let objectBaru2 = new ThisConstructor() 
*/
