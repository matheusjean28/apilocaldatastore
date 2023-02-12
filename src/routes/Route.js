const express = require("express");
const router = express.Router();
const User = require("../dbconfig/databaseModel/userDbModel");
const userControler = require("../controler/userControler");
const payControler = require("../controler/payControler");
const getPaymentUserControler = require("../controler/getPaymentUserControler");
const Payment = require("../dbconfig/databaseModel/PaymentModel");


//get all users in database ** only can be used by admins acounts.
router.get("/api", async (req, res) => {
  const getAllUser = await User.findAll();
  res.status(200).json(getAllUser);
});

//create a new user acount 
router.post("/api/create", userControler, async (req, res) => {
  const { firstName, lastName, status } = req.body;
  try {
    const usuario = await User.create({
      firstName,
      lastName,
      status,
    });
    await usuario.save();
  } catch (error) {
    console.log(error);
  }
  return res.send(`${firstName}, ${lastName}, ${status} `);
});


//get all payment related into a user
router.get("/api/:id",getPaymentUserControler, async (req, res) => {
  const getAllUser = await Payment.findAll();
  res.status(200).json(getAllUser);
});


//create new payment in database
//obs: can make a functions that make it and return all formated
router.post("/api/paycreate", payControler, async (req, res) => {
  const { firstName, lastName, status } = req.body;
  try {
    const usuario = await User.create({
      firstName,
      lastName,
      status,
    });
    await usuario.save();
  } catch (error) {
    console.log(error);
  }
  return res.send(`${firstName}, ${lastName}, ${status} `);
});


module.exports = router;
