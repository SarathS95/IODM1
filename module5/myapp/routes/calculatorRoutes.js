const express = require('express');
 const router = express.Router();
 
// new route for adding two numbers
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2

    console.log(sum)
    
    res.status(200)
    res.json({result:sum})
 })

 module.exports = router;

//  index.js;
 // import all calculator routes (up the top)

 // map the calculator routes to our app
//  app.use('/calculator', calculatorRoutes);