const express = require('express')
const router = express.Router()
const database = require('../dbconfig/db')
const User = require('../dbconfig/databaseModel/userDbModel')

router.get("/api",  async (req,res)=> {
    const getAllUser = await User.findAll()
    console.log(getAllUser)
    res.status(200).json(getAllUser)

})

router.post('/api/create', async (req, res) => {
    console.log('creating a pay')
    const newuser = await User.create({
        firstName:'asdfas'
      })
    await newuser.save()
    .then(() => {
        console.log(newuser)
    })
    .catch((Error))
      console.log('connection successfully');

    res.status(200).json({message:'payment ok'})
})

module.exports = router;