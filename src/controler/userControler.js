const express =require('express')

const validateInput = function(req, res, next){
   console.log('teste')
    const {firstName, lastName, price, duedate} = req.body;

    if(firstName || lastName || price || duedate == null){
     return res.status(400).json({message: 'filds not be empyt'})    
    } {
        next()
    }
   next();
}

module.exports = validateInput;