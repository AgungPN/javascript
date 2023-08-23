/* 
Fungsional Programming merupakan paradigma pemograman yang membuat program kita menjadi lebih sederhana dan mudah dibaca.
Ada 4 konsep utama dalam Paradigma Fungsional Pemograman
*/

/* 1. Pure Function (merupakan fungsi yang tidak tergantung terhadap nilai diluarnya/ tidak merubah nilai diluarnya. Sehingga mau seperti apapun keadaanya pasti akan tetap mengembalikkan nilai yang sama) 
Syarat Pure Function:
•	Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
•	Hanya bergantung pada argumen yang diberikan.
•	Tidak menimbulkan efek samping

Kebalikkan dari Pure Function adalah Impure Function
*/

// tanpa Pure Function
let PI = 3.14
const hitungLuasLingkaran = (r) => PI * (r * r)
console.log(hitungLuasLingkaran(4)) // 50.24
PI = 4 // tidak sengaja terubah
console.log(hitungLuasLingkaran(4)) // 64 (nilai akan berubah jika ada kondisi yang berubah, meskipun memiliki argument yang sama)

// Pure Function
const pureFunctionHitungLuasLingkaran = (r) => 3.14 * (r * r)
console.log(pureFunctionHitungLuasLingkaran(4))

/* 2. Immutability (suatu object tidak boleh dirubah setelah dia didefinisikan) */
// tanpa Immutability
const user = {
  firstName: "Agung Prasetyo",
  lastName: "Nugro", // typo salah/kurang lengkap
}
const user2 = { ...user } // copy object dari user
const renameLastNameUser = (lastName) => (user.lastName = lastName) // kita merubah nilai dari object user
renameLastNameUser("Nugroho")
console.log(user)

// with immutability
const createUserWithNewLastName = (lastName) => ({
  ...user2,
  lastName: lastName,
})
console.log(createUserWithNewLastName("Nugroho"))
console.log(user2)

/* 3. Rekursif (suatu fungsi yang memanggil dirinya sendiri) */
// without rekursif
const countDownWithOutRekursif = (num) => {
  for (let i = num; i > 0; i--) console.log(i)
}
countDownWithOutRekursif(10)

const countDownWithRekursif = (num) => {
  console.log(num)
  if (num > 0) countDownWithRekursif(--num)
}
countDownWithRekursif(10)

/* 4. high-order function (kita bisa mengangap function seperti sebuah data, kita bisa menyimpan fungsi kedalam variable, menjadikannya sebagai parameter, dll)
kita bisa menggunakan high-order function untuk:
•	Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
•	Membuat utilities yang dapat digunakan diberbagai tipe data.
•	Membuat teknik currying atau function composition.

untuk lebih jelas lihat file "high order function.js" pada folder wpu
*/

const hello = () => "hello"
const say = (someFunc) => someFunc()
const sayHello = () => {
  return () => "Hello World"
}
console.log(hello())
console.log(say(() => "say Hello"))
console.log(sayHello()())
