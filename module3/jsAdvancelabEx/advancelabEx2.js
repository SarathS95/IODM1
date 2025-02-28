// The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

// function delayMsg(msg)
// {
// // console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// a) What order will the four tests below print in? Why?
// This message will be printed after a delay: #4: Not delayed at all(first, synchronous therefore no delay)
// This message will be printed after a delay: #3: Delayed by 0ms
// This message will be printed after a delay: #2: Delayed by 20ms
// This message will be printed after a delay: #1: Delayed by 100ms

// b) Rewrite delayMsg as an arrow function
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// c) Add a fifth test which uses a large delay time (greater than 10 seconds) 
let cancelledTimerId = setTimeout(delayMsg, 13000, '#5: Delayed by 13seconds');  //5th Test > 10seconds

// d) Use clearTimeout to prevent the fifth test from printing at all. 
clearTimeout(cancelledTimerId);
console.log('no message');