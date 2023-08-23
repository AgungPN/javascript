/*
documentasi: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
*/

var arr = ["agung", "prasetyo", "nugroho", "agus", "imam"]
//METHODE

//1. .length
//2. .join (menggabungkan array dan ubah menjadi string)

// var arr = ['agung','prasetyo','nugroho'];
// console.log(arr.join(' - '));

//3, push dan pop
// push menambahkan array di akhir

// var arr = ['agung','prasetyo','nugroho'];
// arr.push ('adi','nur'7);
// console.log(arr.join(' - '));

//  pop (menghapus element terakhiir)
// var arr = ['agung','prasetyo','nugroho'];
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

//UNSHIFT (menambah array di awal) DAN SHIFT (menghapus array di awal)
// arr.unshift('Adi');
// arr.shift();
// console.log(arr.join(' - '));

// SPLICE
//splice(indexMulai,mauDiHapus,arrayBaru1,arrayBaru2,..);
//1

// arr.splice(1,0,'adi');
// console.log(arr.join(' - '));

//2
// arr.splice(1,2,'adi','nur');
// console.log(arr.join(' - '));

//SLICE
//slice(awal, akhir)
// awal juga terpotonh, akhir tidak

// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

//FOREACH (perulangan)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var nama = ["agung", "prasetyo", "nugroho", "nur", "adi"]
// for(var i =0 ; i < angka.length;i++){
//     console.log(angka[i]);
// }

//1
// nama.forEach(function(e){
//     console.log(e);

// });

//2

// nama.forEach(function(a, i){    // tambahkan nomer index

//     console.log('Siswa ke-'+ (i+1) + ' adalah : '+ a);
// });
//i = index

//MAP (perulangan lebih baik dari forEach, karena mereturn array baru. Sedangakan forEach tidak return)

// var angka2 =angka.map(function(e){
//     return e * 2;
// })
// console.log(angka2.join(' - '));

// SORT (menggurutkan)

//Untuk Satuan Angka

// var acak = [1,3,5,8,9,6,2];
// acak.sort();  // tanpa tambahan argument maka hanya akan mengurutkan nilai pertama saja
// console.log(acak.join(' - '));

//Untuk Puluhan

// var acak2 = [1,4,6,8,8,99,6,10,20];
// acak2.sort((a,b)=> a-b);   // jika a-b menghasilkan > 0 maka akan di swap nilainya
// console.log(acak2.join(' - '));

//FILTER DAN FIND (mencari nilai)

//FILTER (bisa lebih dari satu)

//CONTOH !
// var acak2 = [1,4,6,8,8,99,6,10,20];
// var acak3 = acak2.filter(function(x){
//     return x == 8;
// // bisa "==" / "<" / ">"

// });
// console.log(acak3);

//CONTOH 2
// var acak2 = [1,4,6,8,8,99,6,10,20];
// acak3 = acak2.filter(function(k){
//     return k > 8;
// });
// console.log(acak3.join(' - '));

//FIND (hanya mengembalikan 1 nilai contoh seperti CONTOH 1, jika menggunakan contoh 2 untuk find maka hasilnya cuma satu nilai)

//CONTOH !
var acak2 = [1, 4, 6, 8, 8, 99, 6, 10, 20]
var acak3 = acak2.find(function (x) {
  return x == 8
})
console.log(acak3) // find hanya mengambil 1 data
