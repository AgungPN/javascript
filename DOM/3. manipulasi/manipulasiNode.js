/* https://developer.mozilla.org/en-US/docs/Web/API/Node */


/* Create Element */
/* Buat element baru diakhir data */
const newList = document.createElement("li")  //buat element HTML baru
const newH4 = document.createElement("h4")
const newTextList1 = document.createTextNode('parentNode.replaceChild')   // buat text/string dari element HTML
newList.classList.add("text-brown")

newH4.appendChild(newTextList1)  // isi newH4 dengan text
newList.appendChild(newH4)   // masukkan newH4 kedalam newList (bagian paling bawah)

const list = document.getElementsByClassName("list")[0]
list.appendChild(newList)   // masukkan newList kedalam list


/* Buat Element baru sebelum data */
const newList2 = document.createElement("li")
const newH4v2 = document.createElement("h4")
const newTextList2 = document.createTextNode("node.appendChild()")   // buat text/string dari element HTML

newH4v2.appendChild(newTextList2)
newList2.appendChild(newH4v2)
newList2.classList.add("text-brown")

const afterNewList = list.querySelector("li:nth-child(3)")
console.log(newList2)
list.insertBefore(newList2,afterNewList)   //masukkan list sebelum item 


/* Remove element */
const a = list.getElementsByTagName("a")[0]
list.removeChild(a)   // menghapus element child


/* Replace element */
const node = document.getElementsByClassName("node")[0]
const h1Node = node.getElementsByTagName("h1")[0]
const h2 = document.createElement("h2")
const textH2 = document.createTextNode("<code>DOM Manipulasi Node</code>")   //<code> akan diangap string/text

h2.appendChild(textH2)
h2.classList.add("center")

node.replaceChild(h2,h1Node)  //merubah h1Node menjadi h2
