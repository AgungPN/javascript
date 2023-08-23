const colorPick = document.getElementsByName("color")[0]
const copyButton = document.getElementsByTagName("span")[0]
const inputColor = document.getElementsByName("input-color")[0]

colorPick.addEventListener("change", () => {
  inputColor.setAttribute("value", colorPick.value)
  document.body.style.backgroundColor = colorPick.value
})

copyButton.addEventListener("click", function () {
  /*   Copy to Clipboard */
  // Copy menggunakan navigator (metode asyn)
  const text = colorPick.value // setting value
  navigator.clipboard.writeText(text).then(
    () => alert("Copy to clipboard"),
    () => alert("Failed to copy to clipboard")
  )

  /*   Paste program menggunakan navigator */
  // navigator.clipboard.readText().then(clipText => document.querySelector(".form h1").innerText = clipText);

  /*  copy menggunakan metode execCommand (WARNING: Tidak disarankan lagi, karena mau dihapus) */
  /*
    const textarea = document.createElement("textarea")  // untuk copy harus buat element baru dulu
    const valueTextarea = document.createTextNode(colorPick.value)  
    textarea.appendChild(valueTextarea)
    document.body.appendChild(textarea)  // masukkan element baru ke body
    textarea.select()  // select value element baru (isi textarea)
  
    try {
      const success = document.execCommand('copy')   // dikarenakan execCommand tidak disupport di beberapa browser
      alert(success ? "Copy to clipboard" : "Failed to copy to clipboard")
    } catch (error) {
      console.log(error)   // kalau execCommand gagal copy
    }
  
    document.body.removeChild(textarea)   // hapus element baru, agar tidak kelihatan ditampilan 
    */
})
