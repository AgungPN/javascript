/* try {
  const json = '{"age": 17,"name": "Agung PN"}'
  const user = JSON.parse(json)
  console.log(user.name)  // "Agung PN"
  console.log(user.gender)  // undefiend
  // agar jika user.gender undefiend akan dianggap error kita bisa menggunakan throw

  if (!user.gender) throw new SyntaxError("'gender' is required")

  // error

} catch (error) {
  if (error instanceof SyntaxError)  // pesan error khusus untuk error dari SyntaxError
    console.log("JSON Error: " + error.message)
  else if (error instanceof ReferenceError)   // pesan error khusus dari error ReferenceError
    console.log("ERROR: " + error.message)
} */

/* 
======================
====CUSTOM ERROR======
======================
*/
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}

try {
  const json = '{"nama": "Agung PN", "age": 17}'
  const user = JSON.parse(json)
  if (!user.gender) throw new ValidationError("'gender' is required")
} catch (error) {
  if (error instanceof SyntaxError) console.log("JSON Error: " + error.message)
  else if (error instanceof ValidationError) console.log("Invalide data: " + error.message)
  else if (error instanceof ReferenceError) console.log("ERROR: " + error.message)
}
