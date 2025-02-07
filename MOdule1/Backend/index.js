const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Casts are stupid.');
console.log(result); // { score: -2, comparative: -0.6666666666666666}

const result2 = sentiment.analyze('Dogs are Awesome!');
console.log(result2);