/* getElementById() => element */
const header = document.getElementById("header")
console.log(header) // mencetak data header
header.style.color = "red" // membuat inline css
header.style.backgroundColor = "#444" // jika css > 1 kata, maka pakek camelCase

/* innerHTML cukup berbahaya, karena jika kita mengisi program akan dirun, karena itulah menggunakan textContent better then innerHTML */
// header.innerHTML = `<img src="" onerror="alert('hack')">`
header.textContent = `<img src="" onerror="alert('hack')">`

/* getElementsByTagName => HTMLCollenction */
const h2 = document.getElementsByTagName("h2")
console.log(h2) //data HTLMCollection
for (let i = 0; i < h2.length; i++) h2[i].style.color = "purple" // cara memanggil element HTMLCollection sama seperti array [0], mesipun data cuma 1

/* getElementsByClassName => HTMLCollection */
const istilahDasar = document.getElementsByClassName("istilah-dasar")[0] //kalau hanya ingin mengambil 1 element saja
console.log(istilahDasar) //mencetak data istilahDasar (data akan seperti object karena HTMLCollection)
istilahDasar.style.backgroundColor = "#e7e8eb"

/* getElementByName => nodeList */
const input = document.getElementsByName("text") //untuk mengambil data berdasarkan attribute name (biassanya pada input form)
console.log(input)
input[0].classList.add("input")

/* querySelector => element  */
// querySelector hanya akan mengambil 1 element saja, yaitu element yang paling atas, meskipun ditemukkan banyak data
const code = document.querySelector(".istilah-dasar ul li:last-child") // cara menulisnya seperti select CSS
console.log(code)
code.style.textAlign = "center"

/* querySelectorAll => nodeList */
// hampir sama seperti querySelector, tapi akan mengambil semua element dan mengembalikan nodeList
const allH2 = document.querySelectorAll("h2")
console.log(allH2)
for (let i = 0; i < allH2.length; i++) allH2[i].style.backgroundColor = "#efef"

/* getElementById dan getElementsByTagName merupakan yang paling cepat dari semuanya */

/* MERUBAH ROOT dari document ke spesifik element */
const stukturDom = document.querySelector(".struktur-dom")
const h2StrukturDom = stukturDom.getElementsByTagName("h2") //merubah document menjadi element spesifik
for (let i = 0; i < h2StrukturDom.length; i++)
  h2StrukturDom[i].style.textTransform = "uppercase"
