// Synchronous permasalahan
/* users.forEach((user) => {
  const users = ["Agung", "Prasetyo", "Nugroho", "Nama1", "Nama2", "Nama3"]
  console.log("Start")
  for (let i = 0; i < 1000000; i++) {
    let date = new Date()
    date.getDate()
  }
  console.log(`${user}`)
})
console.log("End") */

// Asynchronous callback
// XMLHttpRequest version / AJAX version
function getUser(url, success, error) {
  // success dan error merupakan callback
  const xmr = new XMLHttpRequest()
  xmr.onreadystatechange = function () {
    if (xmr.readyState == 4 && xmr.status == 200) success(xmr.response)
    else error()
  }
  xmr.open("get", url)
  xmr.send()
}
console.warn("START")
getUser(
  "../../dataUsers.json",
  (respons) => JSON.parse(respons).forEach((e) => console.log(e.first_name)),
  () => console.error("Error")
)
console.warn("END") // karena AJAX merupakan contoh asynchronous maka END akan dibaca dulu sebelum getUser

// Fetch version
/* fetch("../../dataUsers.json")
  .then((response) => response.json())
  .then((respon) => console.table(respon))
  .catch((reason) => console.warn("ERROR API: " + reason)) */
