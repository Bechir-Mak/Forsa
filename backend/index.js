const config = require('./config')
const dotenv = require ('dotenv')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes =require('./routes/ProductRouter');
const UserRoutes = require('./routes/UserRouter');

const app = express ();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


dotenv.config();


app.use('/api',productRoutes.routes);
app.use('/api',UserRoutes.routes);



app.get('/',(req,res) => {
  res.send('hello boss server is running');
});

/*
  //Port
  const port = process.env.PORT || 3000 ;
  const base_url = `http://localhost:${port}`
*/


  app.listen(config.port, () => {
    console.log(`listening port on http://localhost:`+config.port);
    });







/*  API PRODUCTS

const Joi = require('joi');

const products = [
  { id: 1, name: 'Souris' },
  { id: 2, name: 'SourisGamer' },
  { id: 3, name: 'Clavier' }
]


app.get('/api/products',(req,res) => {

    res.send(products);

    });

app.get('/api/products/:id', (req, res) =>{

      const product =products.find(p => p.id === parseInt(req.params.id));
      if(!product){
        res.send('product not found with this ID')
      }else{
        res.send(product);
      }
    });


app.post('/api/products',(req,res) =>{

      const {error} = ValidateProduct(req.body);
      if(error){
        res.status(400).send(error.details[0].message);
        return;
      }
      const product ={
        id: products.length +1,
        name :req.body.name,
      };
      products.push(product);
      res.send(product);
    });

    function ValidateProduct (product){

      const schema = { name: Joi.string().min(3).required(),
      };

      return Joi.validate(product,schema);

    }

app.put('/api/products/:id',(req,res) => {

      const product =products.find(p => p.id === parseInt(req.params.id));

      if(!product){
        res.send('product not found with this ID')
      }

      const {error} = ValidateProduct(req.body);
      if(error){
        res.status(400).send(error.details[0].message);
       }

       product.name = req.body.name;
       res.send(product);

});


app.delete('/api/products/:id', (req,res) => {
  const product =products.find(p => p.id === parseInt(req.params.id));

  if(!product){
    res.send('product not found with this ID')
  }

  //Delete
  const index = products.indexOf(product);
  products.splice(index,1);

  res.send(product);

})
*/
