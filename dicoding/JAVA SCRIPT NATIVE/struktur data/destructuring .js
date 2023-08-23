/* === PADA OBJECT === */
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
}

// tanpa Destructuring, akan ribet jika banyak baris
// const firstName = profile.firstName
// const lastName = profile.lastName
// const age = profile.age

// // dengan destructuring akan membuatnya menjadi simpel
// const { firstName, lastName, age } = profile  //pembuatan nama harus sama dengan key object

// console.log(firstName, lastName, age)

/* Jika variabel sudah dideklarasi, bisa menggunakan destrukuring assignment */
/* let firstName = "Dimas"
let age = 20

// menginisialisasi nilai baru melalui object destruction
({ firstName, age } = profile)   //harus menggunakan (), karena jika tidak akan diangap block statment
console.log(firstName)
console.log(age) */

//default value, agar tidak undefiend jika tidak ditemukkan
// const { firstName, lastName, age = 16, isMale = true } = profile
// console.log(firstName, lastName, age, isMale)

// menyeragamkan nama variabel/ menggunakan nama variabel lain
const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile

console.log(localFirstName, localLastName, localAge)

/* === PADA ARRAY === */
const favorites = ["Seafood", "Salad", "Nugget", "Soup"]

const [firstFood, secondFood, thirdFood, fourthFood, tes = "default"] =
  favorites //nilai dipilih berdasarkan posisi index, dan nama bebas
console.log(firstFood, secondFood, thirdFood, fourthFood, tes)

// const [, , thirdFood ] = favorites   //jika ingin memberikan nama pada index ke 3 isi (,) untuk melewati index pertama dan kedua
// console.log(thirdFood)

// destructuring assignment pada array
let myFood = "Ice Cream"
let herFood = "Noodles"

// ; untuk memberitahu bahwa statment di atas sudah selesai
;[myFood, herFood] = favorites // tidak perlu () seperti pada object
console.log(myFood, herFood)

;[myFood, herFood] = [herFood, myFood] //swap data tidak perlu lagi menggunakan temp variabel
console.log("after swap: " + myFood, herFood)

// mengambil data hanya field tertentu saja
const user = {
  id: 123,
  name: "Agung",
  alamat: "kec. Pabelan",
  nilai: {
    uts: 98,
    ukk: 99,
    tugas: 100,
  },
}

function getIdUser({ id }) {
  // meskipun kita kirim semua data, tapi kita hanya akan mengambil data id saja
  return id
}
console.log(getIdUser(user))

// destructuring bersarang
function cetakUser({ name, alamat, nilai: { uts, ukk, tugas } }) {
  return `Hello, nama saya ${name}, saya tinggal di ${alamat}, dan nilai ukk saya adalah ${ukk}`
}
console.log(cetakUser(user))

// juga bisa menggunakan rest paramater, jika tidak tahu jumlah datanya [ a, ...values ]
