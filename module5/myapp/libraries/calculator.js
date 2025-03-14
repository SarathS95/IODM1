// exercise 7
const { v4: uuidv4 } = require('uuid');
const Logger = require('./logger')
class Calculator {
   constructor() {
    let randomID = uuidv4();
        this.id = randomID
        this.logger = new Logger('calculator', this.id)
    }

    #log = (value) => {
    console.log(`[calculator :${this.id}]:${value}`)
    }
    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value;
    }

    minus(num1, num2) {
        const value = num1 - num2
        this.#log(value)
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2
        this.#log(value)
        return value;
    }

    divide(num1, num2) {
        const value = num1 / num2
        this.#log(value)
        return value;
    }
 }
 module.exports = Calculator