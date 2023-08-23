/* Ambil element HTML */
/*
//  convert nodelist ke array versi menggunakan array.from()
 const listVideo = Array.from(document.querySelectorAll("[data-duration]"))  // convert nodelist menjadi array 
 */

// versi convert nodeList ke array versi spread operator
const [...listVideo] = document.querySelectorAll("[data-duration]")
const sumDuration = document.getElementsByClassName("total-durasi")[0]
const sumVideo = document.getElementsByClassName("jumlah-video")[0]

/*

// filter video "Kelompok 1"
//includes untuk mengecek apakah terdapat string "Kelompok 1" disetiap list (true/false)
const filterVideo = listVideo.filter(video => video.textContent.includes("Kelompok 1"))
// console.log(filterVideo)

// ambil durasi
// const getDurasi = filterVideo.map(video => video.getAttribute("data-duration"))   // menggunakan getAttribut
const getDurasi = filterVideo.map(video => video.dataset.duration)   // menggunakan dataset (digunakan untuk attribut data-)
// console.log(getDurasi)

// convert string waktu menjadi int, dan ubah jam dan menit menjadi detik 
const intDurasiVideo = getDurasi.reduce((accumulator,time) => {
  // pecah 12:12 -> [12,12]
  let arrDurasi = time.split(":")  // pecah string menjadi array
  let seconds = 0, minute = 1
  while (arrDurasi.length > 0) {
    seconds += minute * (+arrDurasi.pop())
    minute *= 60  // menit dan  jam ke detik
  }
  return accumulator + seconds
}, 0)

sumDuration.textContent = intDurasiVideo
sumVideo.textContent = filterVideo.length 

*/

/* SORT VERSION */
const filterVideo = listVideo.filter((video) =>
  video.textContent.includes("Kelompok 1")
)
const getSumDuration = filterVideo
  .map((video) => video.dataset.duration)
  .reduce((accumulator, video) => {
    let arrDuration = video.split(":"),
      seconds = 0,
      minute = 1
    while (arrDuration.length > 0) {
      seconds += minute * +arrDuration.pop()
      minute *= 60
    }
    return accumulator + seconds
  }, 0)

sumVideo.textContent = filterVideo.length
sumDuration.textContent = (function () {
  const secInHours = 60 * 60
  const hours = Math.floor(getSumDuration / secInHours)
  const minute = Math.floor((getSumDuration % 3600) / 60)
  const seconds = getSumDuration % 60
  return `${hours}:${minute}:${seconds}`
})()
