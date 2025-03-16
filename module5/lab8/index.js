const ecomRoutes = require('./routes/ecomRoutes');
const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
const corsOptions = {
  origin: ["http://192.168.1.73:5173","http://127.0.0.1:5501", "http://localhost:5173"],
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Fake E-commerce Platform')
});

app.use(express.json());
app.use('/', express.static('public'));
app.use('/ecom', ecomRoutes);

app.listen(port, () => {
    console.log(`Your e-com server is at http://localhost:${port}`)
})