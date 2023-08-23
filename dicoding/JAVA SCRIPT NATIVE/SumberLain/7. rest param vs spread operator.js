/* SPREAD OPERATOR */
// memencah iterables (bagian iterables liat di loop.js) menjadi element
const myArr = ["Agung", "Prasetyo", "Nugroho"],
  myArr2 = ["newName", "acak", true]
console.table([...myArr[0]]) // memecah myArr[0] menjadi element2

// menggabungkan beberapa array
const joinArr = [...myArr, ...myArr2]
console.table(joinArr)

// meng-copy array
// salah
/* const newArr = myArr  // ini bukan meng-copy array tapi meng-referensi
newArr[0] = "TES"
console.table(newArr)
console.table(myArr)  // myArr[0] juga ikut berubah menjadi "TES" */

const newArr = [...myArr]
newArr[0] = "TES"
console.table(newArr)
console.table(myArr) // myArr[0] tidak akan ikut berubah

/* REST PARAMETER */
// rest parameter, ini untuk membuat argument yang tidak terbatas menjadi array
function myFunc(a, b, ...args) {
  // rest parameter harus dipaling akhir, karena dia akan mengambil paramter sisa yang tidak didefinisikan
  return `a: ${a}, b: ${b}, args:${args}`
}
console.log(myFunc(1, 4, 2, 3, 5, 6, 7, 4))

// array destructuring
const [firstName, ...sisa] = myArr
console.log(`firstName: ${firstName}, sisa nama: ${sisa}`)

// object destrcturing
const myObj = {
  firstName: "Agung",
  middleName: "Prasetyo",
  lastName: "Nugroho",
  age: 17,
}
const { age, ...name } = myObj
console.log(
  `myName is: ${name.firstName} ${name.middleName} ${name.lastName}, my age is: ${age}`
)

// filtering (contoh kasus)
const filterBy = (type, ...values) => {
  return values.filter((value) => typeof value === type)
}

console.table(
  filterBy("number", 12, 4, "str", true, ["arr"], { type: "obj" }, 99)
)
