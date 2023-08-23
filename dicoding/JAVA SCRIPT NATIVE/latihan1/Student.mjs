export default class Student {
  constructor(name, nim) {
    this.name = name
    this.nim = nim
  }
  display() {
    return `Student with name: ${this.name} has NIM: ${this.nim}`
  }
}

export const sayHello = "HELLO WORLD"
