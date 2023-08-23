var penumpang = ["agung", undefined, "adi"]
var tambahpenumpang = function (namaPenumpang, penumpang) {
  // jumlah tempat duduk 15
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang diawal array
    penumpang.push(namaPenumpang)
    //kembalikan isi array & keluar dari function
    return penumpang
  } else {
  }
  //telusuri seluruh kursi dari awal
  for (var i = 0; i < penumpang.length; i++) {
    //jika ada kursi kosong
    if (penumpang[i] == undefined) {
      //tempatkan penumpang pada kursi tersebut
      penumpang[i] = namaPenumpang
      // kembalikan isi array dan keluar dari function
      return penumpang
    }
    //jika sudah ada nama yang sama
    else if (penumpang[i] == namaPenumpang) {
      //tampilkan pesan kesalahan
      console.log(namaPenumpang + " nama telah terpakai")
      // kembalikan isi array dan keluar dari function
      return penumpang
    }
    //jika seluruh isi terisi
    else if (i == penumpang.length - 1) {
      // tambah penumpang di akhir array
      penumpang.push(namaPenumpang)
      // kembalikan isi array dan keluar dari function
      return penumpang
    }
  }
}

var penumpangTurun = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //tampilkan pesan angkot kosong, dan tidak ada yang turun
    console.log("maaf angkot sedang kosong")
    //kemudian isi array dan keluar dari function
    return penumpang
  } else {
    //telusuri kursi dari awal
    for (var i = 0; i < namaPenumpang; i++) {
      //jika nama sesuai
      if (penumpang[i] == namaPenumpang) {
        //hapus penumpang dan ubah nama menjadi, menjadi undifind
        penumpang[i] = undefined
        //isi array dan keluar dari function
        return penumpang
      }
      //jika nama tidak sesuai
      else if (i == penumpang.length - 1) {
        //tampilkan pesan
        console.log(namaPenumpang + "maaf nama tidak ditemukan")
        //kembalikan isi array dan keluar dari function
        return penumpang
      }
    }
  }
}
