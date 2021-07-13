const express = require('express');
const router = express.Router();

const {AddUser,signin} = require('../controllers/UserController');




router.post('/register',AddUser);
router.get('/signin',signin);


module.exports = {
  routes : router
}
