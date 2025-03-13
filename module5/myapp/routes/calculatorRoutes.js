const express = require('express');
 const router = express.Router();
 const calculatorController =  require('../controllers/calculatorController')
// new route for adding two numbers
// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2

//     console.log(sum)
    
//     res.status(200)
//     res.json({result:sum})
//  });

//  Exercise2
// Subtract
// router.get('/sub', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let minus = number1 - number2

//     console.log(minus)
//     res.status(200)
//     res.json({result:minus})
// });

// divide
// router.get('/divide', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let divide = number1 / number2

//     console.log(divide)
//     res.status(200)
//     res.json({result:divide})
// });

// multiply
// router.get('/multiply', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let multiply = number1 * number2

//     console.log(multiply)
//     res.status(200)
//     res.json({result:multiply})
// });
//  module.exports = router;

//  index.js;
 // import all calculator routes (up the top)

 // map the calculator routes to our app

//  Exercise5
//  app.use('/calculator', calculatorRoutes);
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res);
 });

 router.get('/sub', (req, res) => {
    calculatorController.minusNumbers(req,res);
 });

 router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res);
 });

 router.get('/divide', (req, res) => {
    calculatorController.divisionNumbers(req,res);
 });
 module.exports = router;