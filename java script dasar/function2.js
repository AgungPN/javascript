// COBA 1

// function tambah(a, b){
//     return a + b;
// }
// var a = 10;
// var b = 5;
// var hasil = tambah(a*2, b*2);
// console.log(hasil);

// COBA 2

// function tambah(a, b){
//     return a + b;
// }
// function kali (a, b){
//     return a * b;
// }
// var hasil = kali(tambah(1,2),tambah(3,4));
// console.log(hasil);

// COBA 3 LOOPING PADA FUNGSI
function ulang(n) {
  if (n === 0) {
    return
  }
  console.log(n)
  return ulang(n - 1)
}
ulang(10)
