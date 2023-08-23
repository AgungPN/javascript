class Mail {
  constructor(author) {
    this.from = author
    this._contact = []
  }
  sendMessage(msg, to) {
    const find = this._contact.find((c) => c === to)
    if (!find) this._contact.push(to)
    return `from: ${this.from}
  ==> ${msg} <==
to: ${to} 
  `
  }
}

/* const mail1 = new Mail("agungpn33@gmail.com")
console.log(mail1.sendMessage("Hello", "to1@gmail.com"))
console.log(mail1.sendMessage("Hello", "to2@gmail.com"))
console.log(mail1.sendMessage("Hello", "to3@gmail.com")) */

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phone) {
    // overriding
    super(phone) // super() untuk memanggil parent constructor
    this.username = username
    this.isBussinessAccount = isBussinessAccount
  }
  myProfil() {
    return `username: ${this.username}\nphone: ${ this.from }\nisBussinessAccount: ${this.isBussinessAccount ? "Yes" : "No"}`
  }

  // sendMessage() overriding method parent
  sendMessage(msg, to) {
    let parent = super.sendMessage(msg, to) // tetap menjalankan method sendMessage() parent
    return parent + "( BY WhatsApp )"
  }
}

const whatsApp = new WhatsApp("Agung PN", true, "083107948423")
console.log(whatsApp.myProfil())
console.log(whatsApp.sendMessage("Hello World", "672021077@student.uksw.edu"))
