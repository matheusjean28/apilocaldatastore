const express = require('express')
const routes = require('./routes/Route')
const app = express()
const sequelize = require('./dbconfig/db')

//testing conection database
const testeConection = async () => {
    try {
      const database = require('./dbconfig/db')
      const User = require('./dbconfig/databaseModel/userDbModel')
      await database.sync();
      await User.sync()
      
    }
    catch (error) {
      console.error(error.message);
      process.exit(-1);
    }
}; testeConection()


app.use(express.json())
app.use('/', routes)

app.listen(3333, ()=> {
    console.log('not wrongs')
})