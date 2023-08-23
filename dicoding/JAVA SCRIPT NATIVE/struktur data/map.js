/* MAP hampir sama seperti object yang merupakan pasangan key dan value, tapi map memperbolehkan key bertipe data apapun tidak seperti object yang hanya bertipe data string atau Symbol */

// const myMap = new Map()  //deklarasi map
const myMap = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]) //deklarasi map sekaligus inisialisasi, harus menggunakan array multi dimensi
console.log(myMap)

// Lalu untuk memanipulasi map kita bisa menggunakan getter dan setter
console.log(myMap.size) // melihat jumlah data di map
console.log(myMap.get(1)) // mengambil nilai
myMap.set("tambahan", "tambahan") // menambahkan/mengubah nilai
myMap.delete(true) // menghapus nilai
console.log(myMap)
console.log(myMap.has("tambahan")) // digunakan untuk mengecek apakah data dengan key tertentu ditemukkan, mengembalikkan boolean

//meskipun ini berhasil, tapi ini salah karena disimpan sebagai generic object, dan tidak bisa menggunakan fitur map seperti .delete dan .has
myMap["salah"] = "Ini salah"
console.log(myMap["salah"])
