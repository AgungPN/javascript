/* dari program dibawah kita menggunakan banyak sekali callback, maka dari itu disebut dengan callback hell */

// ambil element HTML
const formSearch = document.getElementById("form-search")
const buttonSearch = document.getElementById("button-search")
const rowDataMovie = document.querySelector(".row-data-movie")

buttonSearch.addEventListener("click", function () { // CALLBACK
  rowDataMovie.innerHTML = "" // bersihkan tampilan, agar ketika search lagi data seperti di reset

  let xmr = new XMLHttpRequest() // deklarasi AJAX
  let textSearch = formSearch.value
  // ketika diload, bisa juga dengan onreadystatechange
  xmr.onload = function () {
    // CALLBACK
    if (xmr.readyState == 4 && xmr.status == 200) {
      // readyState 1-4. 4 berarti sudah ready, status 200 sukses
      const movies = JSON.parse(xmr.response) // parse JSON ke array

      // console.log(movies.Response == "True" ? "BENAR" : "SALAH")  // kalau data tidak ditemukkan maka "SALAH"
      if (movies.Response == "False") {
        rowDataMovie.innerHTML = notFound() // CALLBACK
        return false
      }
      // console.table(movies.Search)  // data response berada pada movies.Search
      movies.Search.forEach(
        (movie) => rowDataMovie.insertAdjacentHTML("beforeend", tagHTMLCard(movie)) // CALLBACK
      )
    }
  }
  // open() untuk konek ke API, (method, urlApi, bolleanAsync)
  xmr.open(
    "GET",
    "http://www.omdbapi.com/?apikey=a50466a0&s=" + textSearch,
    true
  )
  xmr.send() // mengirimkan request
})

const notFound = () => {
  return `<div class="alert alert-danger text-center" role="alert" style="width:1200px;"> Movie tidak ditemukkan!  </div>`
}

const tagHTMLCard = (movie) => {
  return ` <div class="col">
        <div class="card">
          <img src="${movie.Poster}" width="120" height="350" class="card-img-top" alt="IMAGE">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text text-muted">${movie.Year}</p>
            <span role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="badge bg-secondary text-decoration-none text-white">Detail!</span>
          </div>
        </div>
      </div> `
}
