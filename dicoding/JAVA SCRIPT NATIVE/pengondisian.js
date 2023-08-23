/* 
nilai falsy:
- false
- string kosong '' ""
- NaN (not a number)
- undefiend
- null
- 0
- 0n (bigInt 0)

nilai truthy: kebalikan nilai falsy seperti true
*/
let falseBigInt = 0n
if (falseBigInt) console.log("true")
else console.log("false")

console.log(40 && 2)

// ternary bisa saja menggunakan ?:, atau cara simplenya || ??
// || ini mengecek nilai falsy
// ?? nilai undefiend/null
// https://javascript.info/nullish-coalescing-operator
let height = 0

console.log(height || 100) // 100
console.log(height ?? 100) // 0
