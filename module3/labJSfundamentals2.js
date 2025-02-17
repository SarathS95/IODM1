let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
//let addition = three + four
//console.log(addition) //wrong output as the "Three + Four" are read as strings

//correct output
let addition = 3 + 4
console.log(addition)
let multiplication = three * four
console.log(multiplication)
let division = three / four
console.log(division)
let subtraction = three - four
console.log(subtraction)

let lessThan1 = three < four
console.log(lessThan1)
let lessThan2 = thirty < four // wrong, but answer came out true, both numbers are read in string.
console.log(lessThan2) //not sure why it came as true.