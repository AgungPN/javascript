//  alert('mulai...');
//  var benar= true;
// while(benar === true){
//     var angka = prompt('Masukkan Angka :');

// if(angka % 2 ==0){
//     alert(angka+' ini adalah angka GENAP');

// }
// else if(angka % 2 === 1){
//     alert(angka+' ini adalah angka GANJIL');
// }
// else{
//     alert('ini pasti bukan angka :)');
// }
// benar = confirm('coba lagi..');
// }
// alert('thanks :)')

//SWITCT
var menu = prompt(
  "Masukkan nama makanan / minuman : \n (cth : nasi, roti, susu, soda, es cream )"
)

switch (menu) {
  case "nasi":
  case "roti":
  case "susu":
    alert("makanan Sehat")
    break
  case "soda":
  case "es cream":
    alert("makanan tidak Sehat")
    break
}
