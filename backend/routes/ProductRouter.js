
const express = require('express');
const multer = require ('multer');
const { getAllProduct,
   getProduct,
    updateProduct,
     DeleteProduct,
      addProduct} = require('../controllers/productController');


      

const router = express.Router();


const storage = multer.diskStorage({
  destination : (req, file, callBack) => {
    callBack(null,'./uploads/')
  },
  filename : (req,file,callBack) => {
    callBack(null, Date.now() + file.originalname)
  }
})


const upload = multer({storage:storage});




router.post('/product',addProduct );
router.get('/product', getAllProduct);
router.get('/product/:id',getProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',DeleteProduct);

module.exports = {
  routes : router
}
