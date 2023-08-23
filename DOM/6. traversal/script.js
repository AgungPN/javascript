/* 
// CATATAN Traversal: 
// untuk mengakses element/ node lainnya

const closeFirst = document.querySelector(".close")

console.log(closeFirst.parentElement)  // .card, karena .close merupakan anak .card  (Element)
console.log(closeFirst.parentElement.parentElement)  // .container, karena .close merupakan cucu container
console.log(closeFirst.parentNode)  // .card (Node)
console.log(closeFirst.nextSibling)  // enter, karena setelah tag .close ada teks enter (Node)
console.log(closeFirst.nextElementSibling)  // null, karena setelah .close tidak ada apa-apa (Element)
console.log(closeFirst.previousSibling)  // .telp, karena telp saudara sebelum .close (Node)
console.log(closeFirst.previousElementSibling)  // .telp, karena telp saudara sebelum .close (Element)
*/


/* Cara 1 */
/* 
const cara1 = document.querySelectorAll(".close")
// forEach hanya untuk array dan nodeList, untuk object dan HTMLCollection menggunakan for dan for of
cara1.forEach(function (close) {
  close.addEventListener('click', function (e) {
    console.log(e)  // akan mencetak semua informasi event, salah satunya target
    // console.log(e.target)
    e.target.parentElement.style.display = "none"  // parentElement maka akan melihat parent dari element .close

    e.preventDefault()   // akan mengabaikan event default, seperti tag a tidak akan pindah ke halaman lain
    e.stopPropagation()   // matikan bubbling (menghentikkan event alert pada card)
  })
})

// jika kita memberikan event pada card
const cards = document.getElementsByClassName("card")
for (const card of cards) {
  card.addEventListener("click",() => {
   alert("Hello") 
  })
} */



/* Cara 2 */
// cara kedua akan mengambil parent (container), dengan begitu jika ada data baru tetap bisa menggunakan event
const cara2 = document.querySelector(".container")
cara2.addEventListener("click", function (e) {
  if (e.target.classList.contains("close"))
    e.target.parentElement.style.display = "none"

  e.preventDefault()
})

