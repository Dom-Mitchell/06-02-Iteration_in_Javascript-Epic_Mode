const listOfNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]
const listOfEvenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const listOfNumbersWithOneOdd = [2, 4, 6, 8, 10, 12, 14, 3, 16, 18, 20]

// Map ---------------------------------
const _map = (array) => {
  const newArray = []
  array.forEach((number) => {
    newArray.push(number * 2)
  })
  return newArray
}

console.log(_map(listOfNumbers))

// Filter ---------------------------------
const _filter = (array) => {
  const newArray = []
  array.forEach((number, index) => {
    if (number % 2 === 0) {
      newArray.push(number)
    }
  })
  return newArray
}

console.log(_filter(listOfNumbers))

// Reduce ---------------------------------
const _reduce = (array) => {
  let total = 0
  array.forEach((number) => {
    total = total + number
  })
  return total
}

console.log(_reduce(listOfNumbers))

// Every ---------------------------------
const _every = (array) => {
  let allNumbersAreEven = true
  array.forEach((number) => {
    if (number % 2 === 1) {
      allNumbersAreEven = false
    }
  })
  return allNumbersAreEven
}

console.log(_every(listOfEvenNumbers))
console.log(_every(listOfNumbersWithOneOdd))

// Some ---------------------------------
const _some = (array) => {
  let atleastOneOdd = false
  array.forEach((number) => {
    if (number % 2 === 1) {
      atleastOneOdd = true
    }
  })
  return atleastOneOdd
}

console.log(_some(listOfEvenNumbers))
console.log(_some(listOfNumbersWithOneOdd))
