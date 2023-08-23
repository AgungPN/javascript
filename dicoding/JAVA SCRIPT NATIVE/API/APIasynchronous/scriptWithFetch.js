const quoteTagHTML = document.getElementsByClassName("quote")[0]
const random = document.getElementById("random")

const updateUIQuote = data => {
  const h3 = quoteTagHTML.getElementsByTagName("h3")[0]
  const p = quoteTagHTML.getElementsByTagName("p")[0]
  const code = quoteTagHTML.getElementsByTagName("code")[0]

  h3.textContent = data.author
  p.textContent = `"${data.content}"`
  code.textContent = new Date(data.dateAdded).toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

const randomQuote = () => {
  return fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(quote => quote)
    .catch(reason => (quoteTagHTML.innerHTML = `<h4 style="color:red;justify-self:center">ERROR: ${reason}</h4>`))
}

random.addEventListener("click", async () => {
  random.children[0].classList.add("loading")
  const dataQuote = await randomQuote()
  random.children[0].classList.remove("loading")
  updateUIQuote(dataQuote)
})

randomQuote().then(dataQuote => updateUIQuote(dataQuote))
