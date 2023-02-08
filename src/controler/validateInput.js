const validateInput = function (req, res, next) {
  const { firstName, lastName, age, price, status } = req.body;
  console.log(firstName, lastName, age, price);
    if (firstName.trim().length <= 0 || firstName.trim().length>= 120 ||
        lastName.trim().length <= 0 || lastName.trim().length>= 120 || 
          status.trim().length <= 0 || status.trim().length>= 120 ){
      console.log('muito grande')
      res.status(400).json({message: 'something error, please, check filds and try again.'})
    } 
    else {
      next();
     }  
};
module.exports = validateInput;
