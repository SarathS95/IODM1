// const Sentiment = require('sentiment');
// const sentiment = new Sentiment();
// const result = sentiment.analyze('Casts are stupid.');
// console.log(result); // { score: -2, comparative: -0.6666666666666666}

// const result2 = sentiment.analyze('Dogs are Awesome!');
// // console.log(result2);

// let helloText = "say Hi"; 
// let check = 4; 
// if (check > 3) {     
// let hello = "say Hello instead";
// console.log(hello); // hello is not defined
// }

let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji', 'Mount kinabalu' ]; 
let fujiIndex = volcanoes.indexOf('Mount Etna'); 
console.log("outcome:",fujiIndex); // 2 (indexes start at 0) // control C to stop the terminal process.
console.log(volcanoes[1])
console.log(volcanoes[fujiIndex])