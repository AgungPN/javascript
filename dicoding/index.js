// === pertama ===
// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");


// === kedua ===
// const coffeStock = require('./state');
// console.log(coffeStock);

// === ketiga ===
// const coffeStock = require('./state');
// const makeCoffe = (type, miligrams) => {
//     if(coffeStock[type] >= miligrams) return 'kopi berhasil dibuat'
//     else return 'biji kopi kurang'
// }
// let test = makeCoffe('robusta',80)
// console.log(test)

//  === keempat ===
// const {coffeStock,isCoffeeMachineReady} = require('./state');
// console.log(isCoffeeMachineReady)
// console.log(coffeStock)

// === ES6 Module ===
//==tunggal==
// import stok from './state.js';
// const displayStock = stok => {
//     for(const type in stok){
//         console.log(type);
//     }
// }
// displayStock(stok)

// == banyak ==
// import {coffeStock as stok,isCoffeeMachineReady} from './state.js';
// console.log(stok);
// console.log(isCoffeeMachineReady)



// =================================
const _ = require('lodash');
const myArray = [1,2,3,4];
// == Cara 1
// let sum = 0;
// for(let i=0;i<myArray.length;i++){
//     sum += myArray[i];
// }
// console.log(sum);

// == cara 2
// let sum = myArray.reduce((a,b)=>a+b)
// console.log(sum)

// == cara Lodash
// let sum = _.sum(myArray)
// console.log(sum)