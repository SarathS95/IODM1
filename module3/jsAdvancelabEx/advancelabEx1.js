// makeCounter below is a decorator function which creates and returns a function that
// increments a counter.

function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
let counter2 = makeCounter();
counter2();
counter2();
counter2();
counter2();

// Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)

