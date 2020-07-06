# 06-02 Iteration in JavaScript

```Javascript

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
```

# Assignment Overview:

## Objectives

After completing this assignment, you should be able to:

- Demonstrate understanding of iteration/enumeration

## Instructions

1. Fork [this repository](https://github.com/suncoast-devs/js-iteration) to your own account.
2. Change into your projects directory:
3. Clone your repository: `hub clone js-iteration`
4. Change into your project's directory: `cd js-iteration`
5. Install the dependencies: `yarn install` (or just `yarn` for short)
6. Open in your editor]
7. Start the test runner: `yarn test`
8. Open `src/functions.test.js` and work on functions until tests pass.
9. Commit and push your work to GitHub.
10. Turn in the URL to your GitHub repo.

## Explorer Mode

- All tests passing

## Epic Mode

- Using the `forEach` looping method and no other looping or enumeration helper, write your **own version** of the following methods, except name yours `_map`,
  `_filter`, etc.
  - `map`
  - `filter`
  - `reduce`
  - `every`
  - `some`
- Write some example usage of your new methods to demonstrate that they work

## Additional Resources

Reference the documentation on DevDocs to find what kind of helpful functions
might already be in JavaScript.

- [String Functions on DevDocs](https://devdocs.io/javascript/global_objects/string).
- [Array Functions on DevDocs](http://devdocs.io/javascript/global_objects/array).
