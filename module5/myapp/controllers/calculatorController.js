// exercise 7
const Calculator = require('../libraries/calculator');
 let myCalc = new Calculator()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1,number2)

   //  let sum = number1 + number2;

    console.log(sum);

    res.status(200);
    res.json({result:sum});
 }

 const minusNumbers = (req, res) => {
   let number1 = parseInt(req.query.num1);
   let number2 = parseInt(req.query.num2);
   let sub = myCalc.minus(number1,number2)


   // let sub = number1 - number2;

   console.log(sub);

   res.status(200);
   res.json({result:sub});
}

const multiplyNumbers = (req, res) => {
   let number1 = parseInt(req.query.num1);
   let number2 = parseInt(req.query.num2);
   let multiply = myCalc.multiply(number1,number2)

   // let multiply = number1 * number2;

   console.log(multiply);

   res.status(200);
   res.json({result:multiply});
}

const divisionNumbers = (req, res) => {
   let number1 = parseInt(req.query.num1);
   let number2 = parseInt(req.query.num2);
   let divide = myCalc.divide(number1,number2)

   // let divide = number1 / number2;

   console.log(divide);

   res.status(200);
   res.json({result:divide});
}

 module.exports = {
    addNumbers, 
    minusNumbers,
    multiplyNumbers,
    divisionNumbers
 };