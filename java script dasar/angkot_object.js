// function tes({firstName, lastName}) {
//    console.log(`${firstName} ${lastName}`)
// }
// tes({firstName: "Agung Prasetyo",lastName: "nugroho"})

// eslint-disable-next-line no-undef
function Angkot(data = { sopir, trayek, penumpang, kas }) {
  this.sopir = data.sopir
  this.trayek = data.trayek
  this.penumpang = data.penumpang
  this.kas = data.kas
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang)
    return this.penumpang
  }
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // findIndex return -1 jika tidak ada, dan index jika ada
    // let findPenumpang = this.penumpang.findIndex(element => element == namaPenumpang)  // versi findIndex
    let findPenumpang = this.penumpang.indexOf(namaPenumpang) // versi indexOf
    if (findPenumpang == -1) {
      // jika data tidak ditemukkan
      console.warn("data tidak ditemukkan")
      return false
    }
    // penumpang turun dan membayar
    this.kas += bayar
    // delete this.penumpang[findPenumpang]  // mengubah array menjadi empty
    this.penumpang.splice(findPenumpang, 1)
    this.penumpang
    return findPenumpang
  }
}

let angkot1 = new Angkot({
  sopir: "Budy",
  trayek: ["salatiga", "macanan"],
  penumpang: [], // penumpang awal kosong
  kas: 0, // uang awal 0
})

angkot1.penumpangNaik("Agung") // naik
angkot1.penumpangNaik("Prasetyo") // naik
angkot1.penumpangTurun("Agung", 2000) // turun
angkot1.penumpangTurun("Tidak ada", 2000)
console.table(angkot1)
