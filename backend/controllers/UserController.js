const firebase = require('../db');

require("firebase/auth");

addUser = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

authenticate = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);



 const AddUser = async(req,res, next) => {
  const {displayName, email, password } = req.body;
  try {
    const user = await addUser(displayName,email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const signin = async(req,res,next) => {
  const { email, password } = req.body;
  try {
    const user = await authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};


module.exports ={
  AddUser,
  signin,
}
