const express = require('express');
const {addProduct, getAllProduct, getProduct, updateProduct, DeleteProduct} = require('../controllers/productController');

const router = express.Router();


router.post('/product',addProduct);
router.get('/product', getAllProduct);
router.get('/product/:id',getProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',DeleteProduct);

module.exports = {
  routes : router
}
