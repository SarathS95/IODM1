const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
let likeRoutes = require('./routes/likeRoutes');
let commentRoutes = require('./routes/commentRoutes');

// parse requests of content-type -application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
    });

// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/comment', commentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port
    ${PORT}.`);
});