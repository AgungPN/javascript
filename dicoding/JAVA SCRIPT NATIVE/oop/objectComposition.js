/*
 bacaan:
 https://ui.dev/javascript-inheritance-vs-composition
 */

/* =================== */
/* VERSI INHERITANCE*/
/* =================== */

/* class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play() {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy)
    this.breed = breed
  }
  bark() {
    console.log('Woof Woof!')
    this.energy -= .1
  }
}

class Cat extends Animal {
  constructor(name, energy, declawed) {
    super(name, energy)
    this.declawed = declawed
  }
  meow() {
    console.log('Meow!')
    this.energy -= .1
  }
}

const cat = new Cat("Kucing", 10, "tes")
cat.eat(10)
const dog = new Dog("Anjing", 20, "tes");
dog.bark()
*/

/* STRUKTUR INHERITANCE DIATAS:
Animal
  name
  energy
  eat()
  sleep()
  play()

  Dog
    breed
    bark()

  Cat
    declawed
    meow()
*/

/* 
dengan inheritance kita bisa membuat struktur seperti diatas, tapi masalahnya jika kita ingin merubah sesuatu maka kita harus merubah semuannya.
Contohnya kita ingin 
*/

/* =================== */
/* VERSI COMPOSITION*/
/* =================== */

/* Abstruct method */
const eater = (state) => ({
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
})

const sleeper = (state) => ({
  sleep(length) {
    console.log(`${state.name} is sleeping.`)
    state.energy += length
  },
})

const player = (state) => ({
  play() {
    console.log(`${state.name} is playing.`)
    state.energy -= length
  },
})

const barker = (state) => ({
  bark() {
    console.log("Woof Woof!")
    state.energy -= 0.1
  },
})

const meower = (state) => ({
  meow() {
    console.log("Meow!")
    state.energy -= 0.1
  },
})

const adopter = (state) => ({
  adopt(pet) {
    state.pets.push(pet)
  },
})

const friender = (state) => ({
  befriend(friend) {
    state.friends.push(friend)
  },
})

/* CLASS COMPOSITION VERSI 1 (function) */
/* Class Dog */
function Dog(name, energy, breed) {
  let self = { name, energy, breed }
  return Object.assign(
    self,
    eater(self),
    sleeper(self),
    player(self),
    barker(self)
  )
}

const leo = Dog("Leo", 10, "Goldendoodle")
leo.eat(10) // Leo is eating
leo.bark() // Woof Woof!

/* function Cat(name, energy, declawed) {
  let self = { name, energy, declawed }

  return Object.assign(self, eater(self), sleeper(self), player(self), meower(self))
} */

function User(email, username) {
  let self = { email, username, pets: [], friends: [] }

  return Object.assign(
    self,
    eater(self),
    sleeper(self),
    player(self),
    adopter(self),
    friender(self)
  )
}

/* CLASS COMPOSITION VERSI 2 (class) */
function Cat(name, energy, declawed) {
  this.name = name
  this.energy = energy
  this.declawed = declawed
  this.sayHello = function () {
    return `hello this is ${this.name}`
  }

  return Object.assign(
    this,
    eater(this),
    sleeper(this),
    player(this),
    meower(this)
  )
}
const charles = new Cat("Charles", 10, false)
charles.eat(10)
console.log(charles.sayHello())
