// const { coffeeStok, isCoffeeMachineReady } = require('./export.mjs')  // versi import menggunakan nodeJS
/* import coffeeStok from './export.js'  // versi import menggunakan native js */
import { coffeeStok as stok, isCoffeeMachineReady } from "./export.js" // versi import menggunakan native js

stok.tes = "TES"
console.log(stok, isCoffeeMachineReady)
