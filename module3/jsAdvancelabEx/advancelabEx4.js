// The Fibonacci sequence of numbers is a famous pattern where the next number in the 
// sequence is the sum of the previous 2. 
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. 

// a) Write a function printFibonacci() using setInterval that outputs a number in 
// the Fibonacci sequence every second. 
function printFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return[0];
    const fib = [0,1];
    for (let i = 2; i< n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib
}
console.log(printFibonacci(10)); 
// https://docs.vultr.com/javascript/examples/print-the-fibonacci-sequence

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout 
// calls to do the same thing 