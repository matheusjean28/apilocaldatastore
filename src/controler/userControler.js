const express = require("express");

const validateInput = function (req, res, next) {
  console.log();
  const { firstName, lastName, age, price } = req.body;
  console.log(firstName, lastName, age, price)
  next();
};
module.exports = validateInput;
