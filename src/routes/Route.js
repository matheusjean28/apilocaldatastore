const express = require('express')
const router = express.Router()
const User = require('../dbconfig/databaseModel/userDbModel')

router.get("/api",  async (req,res)=> {
    const getAllUser = await User.findAll()
    res.status(200).json(getAllUser)
})

router.post('/api/create', async (req, res) => {
    const {firstName, lastName,price, duedate} = req.body;
    try {
        const usuario = await User.create({
            firstName, lastName,price, duedate
        })
        await usuario.save()
        console.log(`${firstName} has been created with success"""`)
    }
    catch(error){console.log(error)}

    return res.send(`your acount has been created \n , ${firstName} is your username! `)
    /*const newuser = await User.create({
        firstName:'asdfas'
      })*/


})

module.exports = router;