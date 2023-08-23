/* Promise All adalah metode untuk mengeksekusi program promise secara bersamaan. Analoginya seperti kita sedang buber dan memesan makanan secara bersama2 dengan begitu makanan bisa datang secara bersama-sama, metode inilah yg disebut promise.all

const promises = [firstPromise(), secondPromise(), thirdPromise()]

dalam promise all, lama menunggunya mengikuti promise yang paling lama
*/

/* Menambah fitur pada Contoh Mesin Kopi */
const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) resolve("Mesin kopi siap digunakan.")
      else reject("Maaf, mesin sedang sibuk.")
    }, 1000)
  })
}

const checkStok = () => {
  return new Promise((resolve, reject) => {
    if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250)
      resolve("Stok cukup. Kopi siap dibikin") // jika janji terpenuhi
    else reject("Stok tidak cukup!") // jika janji tidak terpenuhi
  })
}

// promise tambahan yang akan dijalankan bersamaan (boilWater & grindCoffee)
const boilWater = () => {
  return new Promise((resolve) => {
    console.log("Memanaskan air...")
    setTimeout(() => resolve("Air panas sudah siap!"), 2000)
  })
}
const grindCoffee = () => {
  return new Promise((resolve) => {
    console.log("Menggiling biji kopi...")
    setTimeout(() => resolve("Kopi sudah siap!"), 1000)
  })
}

const makeEspresso = () => {
  checkAvailability()
    .then((value) => {
      console.log(value)
      return checkStok()
    })
    .then((value) => {
      console.log(value)
      return Promise.all([boilWater(), grindCoffee()])
    })
    .then((values) => {
      const [readyBoilWater, readyGrindCoffee] = values
      console.log(readyBoilWater)
      console.log(readyGrindCoffee)
    })
    .catch((reason) => console.log(reason))
    .finally(() => console.log("=== PROSES SELESAI! ==="))
}

makeEspresso()

/* 
=================================
=========CONTOH LAIN=============
=================================
 */

const movies = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        title: "Peaky Blinders",
        actor: "cillian murphy",
        year: "2013-2021",
      },
    ])
  }, 1000)
})

const weathers = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        daerah: "Pabelan",
        suhu: 25,
      },
    ])
  }, 500)
})

/* without Promise All
movies.then(response => console.table(response))
weathers.then(response => console.table(response)) */

/* with promise All */
Promise.all([weathers, movies]).then((response) => console.log(response))
Promise.all([weathers, movies]).then((response) => {
  // data akan dieksekusi setelah 1s, karena akan diambil promise yang paling lama
  const [weather, movie] = response
  console.table(weather)
  console.table(movie)
})
