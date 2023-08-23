/* https://developer.mozilla.org/en-US/docs/Web/API/Element */
/* https://www.w3schools.com/jsref/prop_html_id.asp */

/* Manipulate innerHTML */
const inner = document.getElementsByClassName("inner")[0]
// inner.innerHTML = `<img src="" onerror="alert('hack')"></img>`
inner.textContent = ""



/* Manipulate Atribute */
const h3 = document.getElementsByTagName("h3")
for (let i = 0; i < h3.length; i++) {
  h3[i].setAttribute("class","text-red")   // untuk set attribut (untuk class, ada khusus yg lebih OP)
  console.log(h3[i].getAttribute("class"))  //untuk mengambil value attribute, return null jika tidak ada
  h3[i].removeAttribute("data")   //untuk remove attribute dika ada
}


/* Manipulate class */
const h1 = document.getElementsByTagName("h1")[0]
h1.classList.add("center")   //untuk menambahkan class baru, jika class sudah ada maka tidak akan melakukan apapun
h1.classList.remove("text-red")  //untuk menghapus class jika ditemukkan
console.log(h1.classList.item(2))   //jika ditemukkan akan return nama class sesuai urutan, jika tidak null
console.log(h1.classList.contains("center"))  //untuk mengecek apakah terdapat class center, return true false
console.log(h1.classList.replace("tes","tesss"))   //untuk merubah suatu class, return true false



