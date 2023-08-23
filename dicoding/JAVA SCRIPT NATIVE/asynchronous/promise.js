/* biasanya promise digunakan untuk mengecek data secara asyn seperti data API. Terkadang meskipun menggunakan asyn kita perlu melakukan proses berantai layaknya sync, karena itulah menggunakan callback, tapi kalau callback kebanyakan menyebabkan callback hell. Callback hall sangat ribet untuk membaca programnya, karena itulah kita bisa menggunakan promise untuk melakukan rantaian pemrosesan

Promise memiliki tiga kondisi, yaitu:
•	Fulfilled (Janji terpenuhi)
•	Rejected (Janji gagal terpenuhi)
•	Pending (Janji sedang dalam proses)

=== SUMBER LAIN ===
janji (terpenuhi / tidak)
status (fullfilled / rejected / pending)
callback(resolve / reject / finally )
aksi (then / catch)

artinya promise pasti mengembalikkan antara terpenuhi/ tidak
*/

/* CONTOH Mesin Kopi  */
const stock = {
  coffeeBeans: 250,
  water: 1000,
}

const checkStok = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250)
      resolve("Stok cukup. Kopi siap dibikin") // jika janji terpenuhi
    else reject("Stok tidak cukup!") // jika janji tidak terpenuhi
  })
}

const handleSuccess = (resolveValue) => console.log(`RESOLVE: ${resolveValue}`) // jika janji terpenuhi
const handleFailure = (rejectionReason) =>
  console.log(`REJECTION: ${rejectionReason}`) // jika janji tidak terpenuhi

// checkStok().then(handleSuccess, handleFailure)   // hanya menggunakan then()
checkStok().then(handleSuccess).catch(handleFailure) // menggunakan then().catch

/* 
=================================
=========CONTOH LAIN=============
=================================
 */
let ditepati = true
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Janji ditepati!")
    }, 2000)
    return
  }
  setTimeout(() => {
    reject("Tidak ditepati!")
  }, 2000)
})
janji
  .finally(/* finally */ () => console.log("=== SELESAI MENUNGGU ===")) // tidak peduli ditepati / tidak
  .then(/* onfulfilled */ (response) => console.log("SUCCESS: " + response))
  .catch(/* orejected */ (reason) => console.warn("FAILD: " + reason))
