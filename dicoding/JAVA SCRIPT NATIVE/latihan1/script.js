// Mahasiswa merupakan alias dari User, karena User merupakan nilai default dari modeule Student.mjs

/* // VERSI 1
 import Mahasiswa, { sayHello as hello } from './Student.mjs'
const student = new Mahasiswa("Agung PN", "672021077").display()
console.log(student)
console.log(hello) */

// VERSI 2 (Promise) bisa dilakukan didalam block scope, jadi tidak perlu diatas
import("./Student.mjs").then(({ default: Mahasiswa, sayHello }) => {
  const student = new Mahasiswa("Agung PN", "672021077").display()
  console.log(student)
  console.log(sayHello)
})
