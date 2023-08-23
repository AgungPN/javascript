/*
 asynchronous memungkinkan kita menjalankan beberapa proses secara bersamaan. Sedangkan synchronous akan menjalankan 1 program dulu menunggu sampai selesai baru lanjut (untuk detail liat docx)
 synchronous itu bisa diibaratkan seperti mengantri memesan kopi, siapa yg duluan akan dilayani dulu. Sedangkan asynchronous pelayan lah yang akan mendatangi kita, dengan begitu selagi kopi dibikin kita bisa melakukan kegiatan lain
  */

/* setTimeOut merupakan cara paling simple untuk membuat program berjalan secara asynchronous */

/* console.log("Selamat datang!")
setTimeout(() => {
  console.log("Terimakasih!")
}, 2000);
console.log("Ada yang bisa kita bantu!")
 */

/* 
kalau kita membaca program diatas secara synchcronous maka kita akan memikirkan seperti ini:
•	Mencetak -> Selamat datang!
•	Menunggu selama tiga detik.
•	Mencetak -> Terima kasih sudah mampir, silakan datang kembali!
•	Mencetak -> Ada yang bisa dibantu?

Namun, karena setTimeOut() merupakan fungsi yang asynchronous artinya tidak akan berhenti untuk mengantri eksekusi, maka program tersebut akan dibaca seperti ini:
•	Mencetak -> Selamat datang!
•	Mencetak -> Ada yang bisa dibantu?
•	Menunggu selama tiga detik
•	Mencetak -> Terima kasih sudah mampir, silakan datang kembali!
*/

/* 
====================================================
MENJALANKAN PROGRAM ASYN SECARA SYNC DENGAN CALLBACK
====================================================
*/

/* // problem asynchronous, terkadang kita akan menghadapi masalah ketika kita berharap program berjalan layaknya sync yang suatu nilai akan berubah ketika sudah selesai proses asyn. Pada contoh dibawah fungsi orderCoffee akan return null, karena program `return coffee` akan tetap dieksekusi tanpa menunggu program asyn selesai. (BTW callback membuat fungsi berjalan didalam fungsi materi High-order function)
const orderCoffee = () => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
  }, 3000);
  return coffee;
  
}

const coffee = orderCoffee();
console.log(coffee);
// output
// Sedang membuat kopi, silakan tunggu...
// null */

// dengan callback asyn
const orderCoffee = (callback) => {
  console.log("Sedang membuat kopi, silakan tunggu...")
  let coffee = null
  setTimeout(() => {
    coffee = "Kopi sudah jadi!"
    callback(coffee)
  }, 2000)
}

orderCoffee((coffee) => console.log(coffee))
