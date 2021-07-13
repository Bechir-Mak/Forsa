const Product = require('../models/product');
const multer = require('multer');
const firebase = require('../db');
const firestore = firebase.firestore();


const addProduct  = async(req,res, next)  => {
  try {
   const data = req.body;
   await firestore.collection('products').doc().set(data);
   res.send('Product saved successfuly');

  }catch(error){
    res.status(400).send(error.message);
  }

};


const getAllProduct = async(req,res,next) => {
  try{

    const products = await firestore.collection('products');
    const data = await products.get();
    const productsArray = [];

    if(data.empty){
      res.status(400).send("no products found");
    }else {
      data.forEach(doc => { const product = new Product(
          doc.id,
          doc.data().name,
          doc.data().category,
          doc.data().prix,
          doc.data().brand,
          doc.data().quantite
        );
        productsArray.push(product);
      });
      res.send(productsArray);
    }

  }catch(error){
    res.status(400).send(error.message);
  }
}

const getProduct = async (req,res,next) => {

  try{
    const id = req.params.id;
    const product = await firestore.collection('products').doc(id);
    const data = await product.get();

    if(!data.exists) {
      res.status(404).send('Product with this ID not found');
    }else {
      res.send(data.data());
    }

  }catch(error){
    res.status(400).send(error.message);
  }
}

const updateProduct = async (req,res,next) => {
  try{
    const id = req.params.id;
    const data = req.body;
    const product = await firestore.collection('products').doc(id);
    await product.update(data);
    res.send('Product Updated successfuly');

  }catch(error){
    res.status(400).send(error.message);
  }
}

const DeleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await firestore.collection('products').doc(id);

    await product.delete(id);
    res.send('product deleted successfuly');
  }catch(error) {
    res.status(400).send(error.message);
  }
}


module.exports = {
  addProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  DeleteProduct

}
