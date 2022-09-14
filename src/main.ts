import './style.css'
// <----- Arrays ----->

console.clear()

const array = [1, 2, 3, 4, 5, 'chris']
console.log(array)

const employees: string[] = []

employees[0] = 'Shaky, Sue'
employees[1] = 'Jumpy, John'
employees[25] = 'Jolly, Jane'

const betterArray = ['Shaky, Sue', 'Jumpy, John', 'Jolly, Jane']

betterArray.push('Happy, Harry')

console.log(betterArray)

console.log(employees)

const cantChangeTheseValues: ReadonlyArray<number> = [42, 50, 110]
// cantChangeTheseValues[0] = 43

console.log(cantChangeTheseValues)

// <----- Iterating Arrays ----->
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple']
// for (let index = 0; index < colors.length; index++) {
//   const color = colors[index]

//   console.log(color)
// }

colors.forEach((color) => console.log(color))

let favoriteNumber: 13 | 42
{
  if (favoriteNumber > 10 && favoriteNumber < 12) {
    console.log('Living the dream!')
  } else {
    console.log('Not living the dream!')
  }
}
console.log(favoriteNumber)

/*  C# equivalent
 public int Square(int valueToSquare)
*/

// favoriteNumber = Number(window.prompt('Enter a number'))

// switch (favoriteNumber) {
//   case 13:
//     console.log('great')
//     break
//   case 42:
//     console.log('good')
//     break
//     case != 13 || 42:
//     console.log('better luck next time')
//     break
// }

// function keyword
// |
// |      name of the function
// |       |
// |       |   required parenthesis where arguments will go
// |       |   |
// |       |   | opening scope of the function
// |       |   | |
// |       |   | |
// v       v   v v
function greet() {
  console.log('Hello there programmer!')
}
greet()

//                              argument type
//                                |
//                                |       function return type (optional)
//                                |       |
//                                |       |
//                                v       v
// function square(valueToSquare: number): number {
//   if (valueToSquare < 0) {
//     return 'Whoa, not so fast!'
//   }
//   return valueToSquare * valueToSquare
// }

const square = function (valueToSquare: number): number {
  return valueToSquare * valueToSquare
}

// console.log(square)

// const fortyTwoSquared = square(42)
// console.log(fortyTwoSquared)

// const fortyTwoSquared = square(42)

function double(valueToDouble: number): number {
  return valueToDouble * 2
}

function makeSomething(value: number): string {
  return `WOW ${value}`
}

function upperCase(value: string): string {
  return value.toUpperCase()
}

// defines a new type that is a FUNCTION (by the =>) that takes a number and returns a number
// this format is easier to read
type printItFunction = (value: number) => number

function printIt(numbers: number[], func: printItFunction) {
  for (let index = 0; index < numbers.length; index++) {
    const value = numbers[index]
    const result = func(value)

    console.log(`Turned ${value} into ${result}`)
  }
}

const numbers = [1, 2, 3, 4, 5]
printIt(numbers, square)
printIt(numbers, double)
// this  vvv would be an error
printIt(numbers, makeSomething)

const words = ['hello', 'world']
printIt(words, upperCase)
