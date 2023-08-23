const thumbs = document.getElementsByClassName("thumbs")[0]
let prevActive
thumbs.addEventListener("click", function (e) {
  if (e.target.src) {
    const newThumb = e.target.parentElement.cloneNode(true)
    newThumb.classList.add("parent")
    newThumb.classList.remove("thumb")
    const container = document.getElementsByClassName("container")[0]
    const parent = document.getElementsByClassName("parent")[0]
    container.replaceChild(newThumb, parent)

    // active
    e.target.parentElement.classList.add("active")

    if (prevActive)
      // jika blm ada data sebelumnya
      prevActive.classList.remove("active")

    prevActive = e.target.parentElement
  }
})
