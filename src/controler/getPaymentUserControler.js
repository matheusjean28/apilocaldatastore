//here comes the verification, if user exists in database, call next, if not exists, send an error
const getPaymentUserControler = function (req, res, next) {
   const id = req.body;
   console.log(id)
   next()
  };
  module.exports = getPaymentUserControler;
  