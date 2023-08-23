for (var i = 3; i >= 1; i--) {
  //user memilih
  alert("Tebak angka 1-10 \nkamu punya 3 kesempatan")
  var p = parseInt(prompt("masukkan angka tebakkan :"))

  //Computer memilih
  var com = Math.random()
  if (com <= 0.1) com = 1
  else if (com < 0.11 && com <= 0.2) com = 2
  else if (com < 0.21 && com <= 0.3) com = 3
  else if (com < 0.31 && com <= 0.4) com = 4
  else if (com < 0.41 && com <= 0.5) com = 5
  else if (com < 0.51 && com <= 0.6) com = 6
  else if (com < 0.61 && com <= 0.7) com = 7
  else if (com < 0.71 && com <= 0.8) com = 8
  else if (com < 0.81 && com <= 0.9) com = 9
  else if (com < 0.91 && com <= 1) com = 10
  else com = "Anda memilih angka salah !"

  //pencokan

  var hasil = ""
  //  if (p == com){
  //  hasil = 'BENAR !';
  //  }
  if (p == 1) {
    if (com == 1) 
      hasil = "BENAR"
    
    if (com <= 2 || com <= 10) 
      hasil = "TERLALU BESAR !"
     else 
      hasil = "anda menebak yang salah"
    
  } else if (p == 2) {
    if (com == 2) 
      hasil = "BENAR ! "
     else if (com == 1) 
      hasil = "Terlalu Kecil !"
     else if (com <= 3 || com <= 10) 
      hasil = "TERLALU BESAR !"
     else 
      hasil = "anda menebak yang salah"
    
  } else if (p == 3) {
    if (com == 3) 
      hasil = "BENAR ! "
     else if (com <= 1 || com <= 2) 
      hasil = "Terlalu Kecil !"
     else if (com <= 4 || com <= 10) 
      hasil = "Terlalu Besar !"
     else 
      hasil = "anda menebak yang salah"
    
  } else if (p == 4) {
    if (com == 4) 
      hasil = "BENAR !"
     else if (com <= 1 || com <= 3) 
      hasil = "Terlalu Kecil !"
     else if (com <= 5 || com <= 10) 
      hasil = " Terlalu Besar !"
     else 
      hasil = "anda memilih yang salah"
  } else if (p == 5) {
    if (com == 5) 
      hasil = "BENAR !"
     else if (com <= 1 || com <= 4) 
      hasil = "Terlalu Kecil"
     else if (com <= 6 || com <= 10) 
      hasil = "Terlalu Besar"
     else 
      hasil = "anda memilih yang salah "
    
  } else if (p == 6) {
    if (com == 6) 
      hasil = "BENAR !"
     else if (com <= 1 || com <= 5) 
      hasil = "Terlalu Kecil"
     else if (com <= 7 || com <= 10) 
      hasil = "Terlalu Besar"
     else 
      hasil = "anda memilih yang salah "
    
  } else if (p == 7) {
    if (com == 7) 
      hasil = "BENAR !"
     else if (com <= 1 && com <= 6) 
      hasil = "Terlalu Kecil"
     else if (com <= 8 || com <= 10) 
      hasil = "Terlalu Besar"
     else 
      hasil = "anda memilih yang salah "
    
  } else if (p == 8) {
    if (com == 8) 
      hasil = "BENAR !"
     else if (com <= 1 && com <= 7) 
      hasil = "Terlalu Kecil"
     else if (com <= 9 || com <= 10) 
      hasil = "Terlalu Besar"
     else 
      hasil = "anda memilih yang salah "
    
  } else if (p == 9) {
    if (com == 9) 
      hasil = "BENAR !"
     else if (com <= 1 || com <= 9) 
      hasil = "Terlalu Kecil"
     else if (com == 10) 
      hasil = "Terlalu Besar"
     else 
      hasil = "anda memilih yang salah "
    
  } else if (p == 10) {
    if (com == 10) 
      hasil = "BENAR !"
     else if (com <= 1 || com <= 9) 
      hasil = "Terlalu Kecil"
     else 
      hasil = "anda memilih yang salah "
    
  }
  // hasil

  alert(hasil + " \n kesempatan " + i)
}
alert("Thank You")
