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
// betterArray.shift('Happy, Harry')

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
// _________________________________________________

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

// Alert
// function AlertIt(numbers: number[], func: PrintItFunction) {
//   for (let index = 0; index < numbers.length; index++) {
//     const value = numbers[index]
//     const result = func(value)

//     window.alert(`Turned ${value} into ${result}`)
//   }
// }

const numbers = [1, 2, 3, 4, 5]
printIt(numbers, square)
printIt(numbers, double)
// this  vvv would be an error
printIt(numbers, makeSomething)

// const words = ['hello', 'world']
// printIt(words, upperCase)

//------- CLOSURES - interview question
// Closures in Typescript are a way to create a function that has access to the variables and functions defind in the outer scope.
const variableFromOuterScope = "Wow, I'm from the outer scope"
function thisFunctionActsLikeAClosure() {
  const variableFromInnerScope = 42
  console.log(
    `I'm a closure! I have access to the variable "${variableFromOuterScope}" and the variable "${variableFromInnerScope}"`
  )
  // Have the debugger stop the program so we can look around
  debugger
}
thisFunctionActsLikeAClosure()

const people = [
  {
    name: 'Alan Turing',
    birthDate: 'June 23, 1912',
    delayMilliseconds: 1100,
  },
  {
    name: 'Ada Lovelace',
    birthDate: 'December 10, 1815',
    delayMilliseconds: 1500,
  },
  {
    name: 'Grace Hopper',
    birthDate: 'December 9, 1906',
    delayMilliseconds: 2000,
  },
  {
    name: 'Donald Knuth',
    birthDate: 'January 10, 1938',
    delayMilliseconds: 2500,
  },
]

function printPersonInfo(person) {
  console.log(`${person.name} was born on ${person.birthDate}`)
}
people.forEach(function (person) {
  // Inside here we have access to the `person` variable. The `person` variable is
  // recreated each time through the forEach loop. Since it is an argument to the
  // function, it is a new creation of that variable.
  function timeoutCallback() {
    // We also have access to the `person` variable here. The function timeoutCallback
    // will remember all the variables that existed that it could see. This includes
    // the `person` variable from the forEach loop.
    // When the function executes **later** (via the `setTimeout`) the
    // fact that this is a "closure" (remembers variables from the outer scope) ensures
    // that each time we call printPersonInfo, the variable `person` will be correct.
    debugger
    printPersonInfo(person)
  }
  setTimeout(timeoutCallback, person.delayMilliseconds)
})
