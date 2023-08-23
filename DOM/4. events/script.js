/* Events (kejadian) != Even (genap) */

/* 
daftar list:
https://developer.mozilla.org/en-US/docs/Web/Events

documentasi:
https://developer.mozilla.org/en-US/docs/Web/API/Event 
*/

/* 
Event Handler: (kurang direkomendasikkan karena harus memanipulasi HTML)
"dengann menggunakan event handler akan menimpa perubahan sebelumnya"
-inline element:
on<event>, contoh onclick="myFunc()"

-element method:
h2.onclick = "myFunc()"


addEventListener
"dengan mengguanakan listener akan menambah perubahan sebelumnya"
*/

/* MENGGUNAKAN INLINE (HANDLER) */
// eslint-disable-next-line no-unused-vars
function lightblueColorInline() {
  document.querySelector(".inline .box").style.backgroundColor = "lightblue"
}

/* MENGGUNAKAN METHOD (HANDLER) */
function lightGreenMethod() {
  box2.style.backgroundColor = "lightgreen"
}
const box2 = document.querySelector(".method .box")
const box2Button = document.querySelector(".method button")

box2Button.ondblclick = lightGreenMethod
// perubahan yang sebelumnya (lightgreen) tidak akan terlihat karena tertimpa dengan perubahan berikutnya
box2Button.ondblclick = () =>
  (document.querySelector(".method .box").style.color = "white")

/* MENGGUNAKAN addEventListener */
const box3Button = document.querySelector(".listener button")
box3Button.addEventListener("mouseenter", function () {
  document.querySelector(".listener .box").style.backgroundColor = "lightcoral"
  // perubahan akan ditambahkan (semua perubahan akan tampil)
  document.querySelector(".listener .box").style.color = "white"
  this.style.backgroundColor = "orange"
})

box3Button.addEventListener("mouseleave", function () {
  this.style.color = "white"
  this.style.backgroundColor = "red"
})
