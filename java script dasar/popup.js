console.log("Welcome")
//ALERT

// alert('welcome...!!!');

// PROMPT

// var nama = prompt('Masukkan Nama :');
// alert('welcome '+ nama);

//CONFIRM

// var yakin = confirm('apakah anda ingin Menghapus?');
// if(yakin === true){
//     alert('penghapusan sukses :)');
// }
// else{
//     alert('Penghapusan dibatalan');
// }

//GABUNGAN

alert("welcome")
let lagi = true

while (lagi === true) {
  let nama = prompt("Masukkan Nama :")
  alert("Hallo " + nama)

  lagi = confirm("coba lagi?")
}
alert("thank you")
