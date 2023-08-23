var tanya = true
while (tanya) {
  // pilihan User

  // var p = prompt('pilih : Gajah, Semut, Orang :');
  var p = prompt("pilih : Gajah, Semut, Orang")
  // pilihan Computer
  // Membangkitkan Rondom

  // random 0 - 1
  var com = Math.random()
  if (com < 0.34) {
    com = "Gajah"
  } else if (com <= 0.34 && com < 0.67) {
    com = "Orang"
  } else {
    com = "Semut"
  }

  //membangkitkan Rules
  var hasil = ""

  if (p == com) {
    hasil = " SERI !"
  } else if (p == "Gajah") {
    // if(com == " Orang"){
    //     hasil = 'MENANG !';
    // }
    // else{
    //     hasil = "KALAH !";
    // }
    // ATAU
    hasil = com == "Orang" ? "MENANG !" : "KALAH !"
  } else if (p == "Orang") {
    hasil = com == "Semut" ? "MENANG !" : "KALAH !"
  } else if (p == "Semut") {
    hasil = com == "Gajah" ? "MENANG !" : "KALAH !"
  } else {
    hasil = "anda Memilih Yang Salah !"
  }
  //hasil
  alert(
    "Anda Memilih " +
      p +
      " Dan Computer Memilih " +
      com +
      "\n Maka Hasilnya " +
      hasil
  )

  tanya = confirm("Ingin Main Lagi ?")
}
alert("Thanks")
