const axios = require ('axios');
// const productController = require('../controller/productContorller')
let fakeStore = 'https://fakestoreapi.com/products';

const fakeProdcut = (req, res) => {
axios.get(fakeStore)
.then(response =>  {
    // console.log(response.data)
res.status(200)
res.json(response.data)}
)
}

module.exports = {
    fakeProdcut
}