let myArray = ["Luke", "Han", "Chewbacca", "Leia"]
// versi for biasa
for (let index = 0; index < myArray.length; index++)
  console.log(`${myArray[index]} data ke-${index}`)

console.log("\n\n")

// versi forEach
/* forEach memiliki 3 parameter:
item: 1 bagian per-array
index(opsional): index per-array
array(opsional): array itu sendiri(full array)
*/

myArray.forEach((arr, i, fullArr) => console.log(`${arr} data ke-${i} full-array: ${fullArr}`))

console.log("\n\n")

// versi for of
/* for of bisa digunakan untuk iterable type: 
array
string
arguments/nodeList
typedArray
Map
Set
user-defined iterables
*/
for (const arrayItem of myArray) // for of seperti forEach melakukan perulangan sebanyak data array dan setiap item akan disimpan di arrayItem
  console.log(arrayItem) //for of juga bisa digunakan pada string untuk mengambil setiap karakter

console.log("\n\n")

// for of with index
for (const [i, arrayItem] of myArray.entries()) console.log(`${arrayItem} data ke-${i}`)

console.log("\n\n")

// for of for string
const str = "Agung PN"
for (const s of str) console.log(s)

console.log("\n\n")

function myReduce() {
  let result = 0
  for (const arg of arguments) result += arg

  return result
}
console.log(`jumlah nilainya yaitu: ${myReduce(1, 2, 6, 3)}`)

console.log("\n\n")

let myObject = { fname: "Agung Prasetyo", lname: "Nugroho", age: 17 }
for (let key in myObject) // for in untuk loop objek, tapi bisa juga untuk array, tapi index ada kemungkinan tidak urut
  console.log(myObject[key]) //jadi untuk loop array lebih baik menggunakan for of

for (let i = 0; i < 10; i++) {
  console.log(i)
}
