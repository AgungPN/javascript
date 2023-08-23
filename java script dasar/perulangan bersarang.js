// var a = '';

// for(var i = 1; i <= 10; i++){
//   for(var j = 1; j <= 5; j++){
//     a += '*';
//     // a = a + '*';

//   }
//     a += '\n';
// }
// console.log(a);

//MODIF
var s = ""

for (var i = 10; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    s += "*"
  }
  s += "\n"
}
console.log(s)

var a = ""

for (let b = 1; b <= 10; b++) {
  for (let c = 1; c <= b; c++) {
    a += "*"
  }
  a += "\n"
}
console.log(a)
