const express = require("express");
const router = express.Router();
const User = require("../dbconfig/databaseModel/userDbModel");
const validateInput = require("../controler/validateInput");


//create a middleware that checks if the user is logged in or has a valid token
router.get("/api", validateInput, async (req, res) => {
  const getAllUser = await User.findAll();
  res.status(200).json(getAllUser);
});



router.post("/api/create", validateInput, async (req, res) => {
  const { firstName, lastName, price, duedate, status } = req.body;
  try {
    const usuario = await User.create({
      firstName,
      lastName,
      price,
      duedate,
    });
    await usuario.save();
    console.log(`${firstName} has been created with success"""`);
  } catch (error) {
    console.log(error);
  }
  
  console.log(`${(firstName, lastName, price, status, duedate)}`);

  /*your acount has been created \n , ${firstName} is your username!...*/
  return res.json({"Your acount has been created!, your username is: ":`${firstName} !` ,
    "your username": firstName
  }).send();
  /*const newuser = await User.create({
        firstName:'asdfas'
      })*/
});

module.exports = router;
