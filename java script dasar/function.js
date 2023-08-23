//MENGKITUNG VOLUME KUBUS TANPA FANCTION

// var a = 8,
//     b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);

//MENGKITUNG VOLUME KUBUS MENGGUNAKAN FANCTION
function jumlahVolumeDuaKubus(a, b) {
  var volumeA
  var volumeB
  var total

  volumeA = a * a * a
  volumeB = b * b * b
  total = volumeA + volumeB

  return total
}
console.log(jumlahVolumeDuaKubus(8, 3))
console.log(jumlahVolumeDuaKubus(5, 5))
