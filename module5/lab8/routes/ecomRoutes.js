const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', (req, res) => {
    productController.fakeProdcut(req, res);
})

module.exports = router;