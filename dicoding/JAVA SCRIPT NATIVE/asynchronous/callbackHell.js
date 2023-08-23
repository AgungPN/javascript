/* callback hell adalah istilah jika kita membuat banyak sekali callback, seperti yang kita tahu dari file sebelumnya bahwa jika kita ingin membuat proses asynchronous layaknya synchronous kita bisa menggunakan callback. Tapi jika ada banyak fungsi yang saling berkaitan maka akan banyak sekai callback
CONTOHNYA, proses memubat kue (kita harus menyelesaikan 1 proses dulu baru lanjut proses lain):
1.	Menyiapkan bahan
2.	Membuat adonan
3.	Memasukkan adonan ke cetakan
4.	Memanggang adonan
*/

// TANPA ASYNCHRONOUS
/* function makeACake(...rawIngredients) {
  const ingredients = collectIngredients(rawIngredients);
  dough = makeTheDough(ingredients);
  pouredDough = pourDough(dough);
  cake = bakeACake(pouredDough);
  console.log(cake);
} */


// DENGAN ASYN (versi Callback Hell). Akan banyak sekali callback (fungsi didalam fungsi), ini akan membuat kita binggung
/* function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients, function (ingredients) {
    makeTheDough(ingredients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeACake(pourDough, function (cake) {
          console.log(cake);
        })
      })
    })
  });
}
 */


// DENGAN ASYN (versi Promise). Akan lebih enak dibaca programnya
/* function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);
} */
