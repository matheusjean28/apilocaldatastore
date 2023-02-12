const express = require("express");

const validateInput = function (req, res, next) {
  const { firstName, lastName, status } = req.body;
  //function that parse parameters to string and the filds price and age to number
  firstName.trim(), lastName.trim(), status.trim();

  //function that remove spaces and count length parameters
  if (
    typeof firstName != "string" ||
    typeof lastName != "string" ||
    typeof status != "string"
  ) {
    console.log("diferente de string");
    res
      .status(400)
      .json({ mesage: "please, check filds and documentation and try again" });
    throw new Error("some fild has not been formated!");
  }
  {
    if (
      firstName.length <= 0 ||
      firstName.length >= 30 ||
      lastName.length <= 0 ||
      lastName.length >= 30 ||
      status.length <= 0 ||
      status.length >= 7
    ) {
      res
        .status(401)
        .json({
          mesage:
            "please, bad formated filds, check documentation and try again later...",
        });
      throw new Error("bad formated filds, more or lower caracters!");
    }
    {
      next();
    }
    console.log("igual string");
  }
};
module.exports = validateInput;
