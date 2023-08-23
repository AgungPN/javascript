const cards = document.querySelector(".cards")
const addButton = document.getElementById("add")
const updateButton = document.querySelector("[data-update]")
const deleteButton = document.querySelector("[data-delete]")

addButton.addEventListener("click", () => {
  const user = {
    first_name: "Agung",
    last_name: "Last",
    email: "email@reqres.in",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  }
  postAPI(user)
})

// getAPI
;(() => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => updateUI(data.data))
    .catch((reason) => console.error(`ERROR: ${reason}`))
})()

const postAPI = ({ first_name, last_name, avatar, email }) => {
  fetch("https://reqres.in/api/users/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name,
      last_name,
      avatar,
      email,
    }),
  })
    .then((response) => 
    {
            console.warn("success",response);
            return response.json()
    })
    .then((data) => console.log(data))
    .catch((reason) => {
      console.error(`ERROR POST API: ${reason}`)
    })
}

const updateUI = (datas) => {
  datas.forEach((data, i) => {
    cards.insertAdjacentHTML("beforeend", syntaxHTMLCard(data, i))
  })
}
const syntaxHTMLCard = (data, i) => {
  return `
    <div class="card" data-card>
      <div class="card-header">
        <img src="${data.avatar}" alt="IMG" />
      </div>
      <div class="card-content">
        <strong>User ke-${i}</strong>
        <p>:</p>
        <p>${`${data.first_name} ${data.last_name}`}</p>
      </div>
    <div class="card-footer">
      <button data-update="${data.id}">Update</button>
      <button data-delete="${data.id}">Delete</button>
    </div>
    </div>`
}
