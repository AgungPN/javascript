/* 1. SIMPLE UBAH WARNA BACKGROUND */
const button = document.getElementsByTagName("button")[0]
const body = document.getElementsByTagName("body")[0]
button.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.toggle("bg-lightblue")
})

/* 2. RAMDOM WARMA */
// buat tombol lewat javascript
const newButton = document.createElement("button")
const newTextButton = document.createTextNode("Background Acak")
newButton.appendChild(newTextButton)
newButton.setAttribute("type", "button")
// // versi appendChild
// const body = document.getElementsByTagName("body")[0]
// body.appendChild(newButton)

// versi after
button.after(newButton) /// tambahkan newButton setelah button

newButton.addEventListener("click", function () {
  // membuat warna acak
  // return random merupakan pecahan dari 0-1

  /* 
round = akan dibulatkan kebawah/keatas 
floor = pembulatan kebawah
ceil = pembulatan keatas
*/
  const randomR = Math.round(Math.random() * 255 + 1) // range dari 1-255  for red
  const randomG = Math.round(Math.random() * 255 + 1) // range dari 1-255  for green
  const randomB = Math.round(Math.random() * 255 + 1) // range dari 1-255  for blue
  console.log(randomB)
  document.body.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})` // cara lain memanggil body, tanpa selector
})

/* 3. RUBAH WARNA MELALUI RANGE */
const red = document.getElementsByName("red")[0] // selector berdasarkan attribute name
const green = document.getElementsByName("green")[0]
const blue = document.getElementsByName("blue")[0]

red.addEventListener("change", function () {
  setRGB()
})
green.addEventListener("change", function () {
  setRGB()
})
blue.addEventListener("change", function () {
  setRGB()
})
const setRGB = () =>
  (body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`)

/* 4. RUBAH WARNA BERDASARKAN POSISI CURSOR */
body.addEventListener("mousemove", function (e) {
  // console.log(e.clientX)   // mengambil nilai berdasarkan posisi kursor dlm sumbu X
  console.log(window.innerWidth) // untuk mengambil width browser, karena browser maka menggunakan window
  const xPos = Math.round((e.clientX / window.innerWidth) * 255)
  const yPos = Math.round((e.clientY / window.innerHeight) * 255)
  body.style.backgroundColor = `rgb(${xPos},${yPos}, 100)`
})
