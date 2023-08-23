// JavaScript Object Litereal != JavaScript Object Notasion (JSON)
const user = {
  firstName: "Agung Prasetyo",
  lastName: "Nugroho",
  "home world": "Pabelan",
}
user.age = 17 //mengubah nilai

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`)
console.log(`Umur saya ${user.age} tahun`)
console.log(`Saya berasal dari ${user["home world"]}`) //ketika key objek lebih dari satu kata

console.log(user)
delete user["home world"] //menghapus key dan value
delete user.lastName
user.tambahan = "tambahan" //menambah objeck
console.log(user)

user.func = function () {
  console.log("this function")
}
/* METHOD OBJECT */
console.log("\nKeys: " + Object.keys(user)) // mengambil keys dari object
console.log("\nValues: " + Object.values(user)) // mengambil nilai dari object
console.log(Object.entries(user)) // mengembalikkan key dan value dalam bentuk array

// meskipun tipe data object kita tetap bisa menggunakan fungsi2 array seperti map, filter, reduce, dll. Contohnya seperti di bawah
console.log(
  Object.assign(
    {},
    Object.keys(user).filter((key) => typeof user[key] == "string")
  )
) // memfilter data di object yang bervalue string

const rooms = { r1: "Room 1", r2: "Room 2", r3: "Room 3" }
const arrayResult = Object.keys(rooms).map((room) => ({
  id: room,
  name: rooms[room],
}))
console.log(arrayResult)
