/* Versi fetch(), fetch merupakan salah satu metode mengambil API secara asynchronous dengan mengembalikkan Promise */

/*
// VERSI 1
const buttonSearch = document.getElementById("button-search")
buttonSearch.addEventListener("click", function () {
  const formInput = document.getElementById("form-search")
  fetch(`http://www.omdbapi.com/?apikey=a50466a0&s=${formInput.value}`)
    .then(response => response.json()) // method json() merupakan bawaan fetch  // karena json() mengembalikan Promise, maka perlu then lagi
    .then(response => {
      const movies = response.Search
      // kelompokkan cards menjadi 1 variable
      let cards = ''
      movies.forEach(movie => cards += foundMovies(movie))
      const rowDataMovie = document.querySelector(".row-data-movie")
      rowDataMovie.innerHTML = cards

      // Detail (modal)
      // const buttons = Array.from(document.getElementsByClassName("modal-detail-movie"))
      const buttons = [...document.getElementsByClassName("modal-detail-movie")]
      buttons.forEach(button => {
        button.addEventListener("click", function () {
          const imdbID = this.id
          fetch(`http://www.omdbapi.com/?apikey=a50466a0&i=${imdbID}`)
            .then(response => response.json())
            .then(response => {
              const modalBody = document.getElementsByClassName("modal-body")[0]
              modalBody.innerHTML = detailMovie(response)
            })
            .catch(err => console.error("ERROR: " + err))
        })
      })
    })
    .catch((reason) => console.error(`ERROR: ${reason}`)) // ketika terjadi error
}) */

//VERSI 2 (Lebih rapih dan Async Await)

const buttonSearch = document.getElementById("button-search")
buttonSearch.addEventListener("click", async () => {
  // untuk memberitahu bahwa didalam fungsi ada yg async
  const formInput = document.getElementById("form-search")
  const movies = await getMovies(formInput.value) // await untuk menunggu getMovies selesai baru masukkin ke movies
  updateUI(movies)
})

// event binding (akan berjalan diseluruh document, agar event tetap bisa terus berjalan) berguna untuk event yang awalnya tidak ada dan nanti ada
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("modal-detail-movie")) {
    const imdbID = e.target.dataset.imdbid
    const movieDetail = await getMovieDetail(imdbID)
    updateUIDetail(movieDetail)
  }
})

const getMovies = (keyword) => {
  return fetch(`http://www.omdbapi.com/?apikey=a50466a0&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => response.Search)
}

const getMovieDetail = (imdbID) => {
  return fetch(`http://www.omdbapi.com/?apikey=a50466a0&i=${imdbID}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error("ERROR: " + err))
}

const updateUIDetail = (movie) => {
  const modalBody = document.getElementsByClassName("modal-body")[0]
  modalBody.innerHTML = tagHTMLModalBody(movie)
}

const updateUI = (movies) => {
  let cards = ""
  movies.forEach((movie) => (cards += tagHTMLCard(movie)))
  const rowDataMovie = document.querySelector(".row-data-movie")
  rowDataMovie.innerHTML = cards
}

const tagHTMLCard = (movie) => {
  return ` <div class="col">
        <div class="card">
          <img src="${movie.Poster}" width="120" height="350" class="card-img-top" alt="IMAGE">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text text-muted">${movie.Year}</p>
            <span role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${movie.imdbID}" id="${movie.imdbID}" class="badge bg-secondary text-decoration-none text-white modal-detail-movie">Detail!</span>
          </div>
        </div>
      </div> `
}

const tagHTMLModalBody = (movie) => {
  return `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="img-fluid">
          </div>
          <div class="col-md-8">
            <ul class="list-group">
              <li class="list-group-item">
                <h3>${movie.Title}</h3>
              </li>
              <li class="list-group-item">Released : ${movie.Released}</li>
              <li class="list-group-item">Director : ${movie.Director}</li>
              <li class="list-group-item">Actors : ${movie.Actors}</li>
            </ul>
          </div>
        </div>
      </div>
      `
}
