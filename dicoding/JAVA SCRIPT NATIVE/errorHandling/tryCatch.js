/* 
untuk menangani error pada JS kita bisa menggunakan try catch. Tuliskan program yang berpeluang untuk error pada try block. Apabila terdapat error akan ditangkap block catch.
*/
try {
  console.log("awal block")
  error
  console.log("akhir block")
} catch (error) {
  console.log("Ini error")
  /* 
  pada object error:
  - name: nama error
  - message: pesan error
  - stack: informasi urutan kejadian yang menyebabkan error
  */
  console.log(error.message)
  console.log(error.name)
  console.log(error.stack)
} finally {
  // akan tetap dieksekusi tidak peduli error atau tidak
  console.log("\nini akan tetap dijalankan meskipun error atau tidak!")
}
