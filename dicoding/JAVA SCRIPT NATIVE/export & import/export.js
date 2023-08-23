/* 
ketika menggunakan native JS kita tidak bisa langsung melakukan export import, kita harus mensetting dulu type data melalui package.json, atau ubah ekstensi file dari .js menjadi .mjs
untuk mendapatkan package.json lakukan "npm init"

*/
const coffeeStok = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
}
const isCoffeeMachineReady = true
/*
 module.exports = { coffeeStok, isCoffeeMachineReady }  // ini merupakan metode exports versi nodeJS
*/

// module  coffeeStok
/* export default coffeeStok  // versi export menggunakan native JS untuk 1 data */
export { coffeeStok, isCoffeeMachineReady }
// console.log(module)
console.log(coffeeStok)
// export default coffeeStok
