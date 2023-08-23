/* weakMap & weakSet mendukung gerbage collaction. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program.  intinya jika nilai referensi dihapus maka data weakMap juga akan hilang 
Untuk info lebih lanjut liat materi di .docx */

// === CONTOH MAP ===
let visitsCountMap = new Map()
function countUser(user) {
  //  || bisa digunakan untuk penganti ternary, seperti ?? dan ?: pada PHP
  let count = visitsCountMap.get(user) || 0 //mungkin, untuk melihat jumlah data berkey sama
  visitsCountMap.set(user, ++count)
}
let agung = { name: "Agung" }
countUser(agung) //menambahkan data agung ke Map
agung = null // menghapus data "agung"
console.log(visitsCountMap) // nilai agung tidak akan terhapus

// === contoh dengan WeakMap
let visitsCountWeakMap = new WeakMap()
function countUserWeakMap(user) {
  let count = visitsCountWeakMap.get(user) || 0
  visitsCountWeakMap.set(user, ++count)
}
agung = { name: "agung" }
countUserWeakMap(agung) //menambahkan data "agung" ke WeakMap
agung = null //menghapus data agung
console.log(visitsCountWeakMap.has(agung))
