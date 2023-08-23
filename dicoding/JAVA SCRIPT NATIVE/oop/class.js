// blueprint/ template/ cetakan
class Mail {
  /*
  cara membuat visibility/identifier  private pada javascript dengan menambahkan # (bisa diterapkan pada properti/ method) 
  atau bisa saja menambahkan '_' sebelum nama properti, sebenarnya ini tidak akan membuat private properti tapi akan memberitahukan pada develop bahwa itu merupakan private properti
  
  documentasi: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  https://css-tricks.com/implementing-private-variables-in-javascript/

  atau lihat docs "23. properti dan method.docs"
  */
  #privatePenerima
  constructor(pengirim, penerima, isiMessage) {
    // properti
    this.pengirim = pengirim
    this.#privatePenerima = penerima
    this.isiMessage = isiMessage
    this._tes = "private"
  }

  // method
  isSuccess() {
    return `${this.pengirim} berhasil mengirim email ke ${ this.#privatePenerima } \n`
  }
  printMessage() {
    return `${this.isiMessage}`
  }

  // static method
  static isEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // regex untuk mengecek email (untuk membuat regex diawali dan diakiri /)
    return regex.test(String(email).toLowerCase()) // test() merupakan fungsi dari class RegExp() untuk mengecek regex
  }
}

// object
const mail1 = new Mail(
  "agungpn33@gmail.com",
  "672021077@student.uksw.edu",
  "Hello"
)
console.log(mail1.isSuccess())

// object
const mail2 = new Mail(
  "email2@gmail.com",
  "penerima2@gmail.com",
  "Ini isi pesan dari email ke-2"
)
console.log(mail2.isSuccess())
console.log(mail1.printMessage())
console.log(Mail.isEmail("AgungPN33@gmail.com"))
