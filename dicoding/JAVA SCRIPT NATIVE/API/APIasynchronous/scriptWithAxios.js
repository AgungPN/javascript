// const axios = require('axios')
// import axios from 'axios'
// eslint-disable-next-line no-undef
const axios = require('axios')
axios
  .get("https://api.quotable.io/random")
  .then(response => console.log(response.data))
  .catch(error => console.error("ERROR", error))
/* const quoteTagHTML = document.getElementsByClassName("quote")[0]
const random = document.getElementById("random")

const updateUIQuote = (data) => {
  const h3 = quoteTagHTML.getElementsByTagName("h3")[0]
  const p = quoteTagHTML.getElementsByTagName("p")[0]
  const code = quoteTagHTML.getElementsByTagName("code")[0]

  h3.textContent = data.author
  p.textContent = data.content
  code.textContent = new Date(data.dateAdded).toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

const randomQuote = () => {
  // eslint-disable-next-line no-undef
  return axios
    .get("https://api.quotable.io/random")
    .then((response) => response.data)
    .catch((reason) => console.error(`ERROR: ${reason}`))
}

randomQuote()
  .then((response) => updateUIQuote(response))
  .catch((reason) => console.error("ERROR: " + reason))

random.addEventListener("click", async () => {
  random.children[0].classList.add("loading")
  const dataQuote = await randomQuote()
  updateUIQuote(dataQuote)
  setTimeout(() => random.children[0].classList.remove("loading"), 0)
})
 */
