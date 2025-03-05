const express = require('express')
 const app = express()
 const port = 3000
 const port1 = 3500
 const port2 = 4000
 const cors = require("cors");
const corsOptions = {
    origin: "http://127.0.0.1:5500",
};
// cors(corsOptions);
app.use(cors(corsOptions));

// Import routes
const testRoutes = require("./routes/myTestRoutes")
 const calculatorRoutes = require('./routes/calculatorRoutes');
 

//  routes
app.use("/", express.static("public"));
app.use("/mytest", testRoutes);
app.use("/calculator",calculatorRoutes );

 app.listen(port, () => {
  console.log(`Example app listening 
at http://localhost:${port}`)
 })

 app.listen(port1, () => {
    console.log(`Example app listening 
  at http://localhost:${port1}`)
   })

   app.listen(port2, () => {
    console.log(`Example app listening
        at http://localhost:${port2}`)
   })