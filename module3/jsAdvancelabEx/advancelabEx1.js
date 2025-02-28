// makeCounter below is a decorator function which creates and returns a function that
// increments a counter.

// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//     currentCount++;
//     console.log(currentCount)
//     return currentCount;
//     };
// }
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// let counter2 = makeCounter();
// counter2();
// counter2();
// counter2();
// counter2();

// Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// function makeCounter(startFrom) {
//     let currentCount = startFrom;
//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     };
// }
// let counter1 = makeCounter(3);
// console.log("counter1:")
// counter1();
// counter1();

// let counter2 = makeCounter(10);
// console.log("counter2:")
// counter2();
// counter2();
// counter2();

// c) Modify makeCounter to take another argument incrementBy, which specifies how 
// much each call to counter() should increase the counter value by. 
function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function() {
        currentCount+= incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}
let counter1 = makeCounter(3, 6);
console.log("counter1:")
counter1();
counter1();
