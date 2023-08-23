//Faktorial n!

function factorial(n) {
  if (n === 0) return
  return n * factorial(n - 1)
}
factorial(5)
