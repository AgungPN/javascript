const mahasiswa = [
  {
    name: "Agung",
    semester: 3,
    matkul: ["DDP", "ASD", "Web Develop", "RPL"],
  },
  {
    name: "Prasetyo",
    semester: 4,
    matkul: ["Psikologi", "antropologi"],
  },
  {
    name: "Nugroho",
    semester: 6,
    matkul: ["ASD", "PTI", "Pemdas"],
  },
]

const el = `<ol>
${mahasiswa.map((obj) => `
<li>
   <h3>Nama: ${obj.name}</h3> 
  <p>Semester: ${obj.semester}</p>
  <p>Semester <strong>${obj.semester % 2 == 0 ? "genap" : "ganjil"}</strong></p>
  <ul>
  ${obj.matkul.map((m) => `<li><p>${m}</p></li>`).join("")} 
  </ul>
</li>`
  )
  .join("")} 
</ol>`

document.body.innerHTML = el

/*
 tagged template literals merupakan bentuk yang lebih kompleks dari template literals biasa, memungkinkan kita untuk membaca template literals melalui sebuah function 

berguna untuk escaping HTML tags (berguna kalau isi diisi oleh user agar user tidak mengisi nilai jahat)
translation/translite (https://github.com/skolmer/es2015-i18n-tag)
styled componenets
*/
const user = {
  name: "Agung PN",
  umur: 17,
}
const highlist = (strings, ...values) => {
  return strings.reduce(
    (
      result,
      str,
      i // param
    ) => `${result}${str}<span class="highlist">${values[i] || ""}</span>`, // proses
    "" // start with ""
  )
}

const str = highlist`hello, nama saya ${user.name}, saya ${user.umur} tahun`
console.log(str)
document.body.innerHTML = str
