const coffeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
const isCoffeeMachineReady = true;
// === Old Module ===
// module.exports = coffeStock;
// module.exports = {coffeStock,isCoffeeMachineReady};
// == lihat module ==

// === ES6 Module
// ==tunggal
// export default coffeStock;
//==banyak
export {coffeStock,isCoffeeMachineReady};
