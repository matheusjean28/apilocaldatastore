const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(30)
    // allowNull defaults to true
  },
  age: {
    type: DataTypes.NUMBER(3)
  },
  price: {
    type: DataTypes.NUMBER(15),
    allowNull: true
  }, 
  duedate: {
    type: DataTypes.STRING(15),
  },
  status: {
    type: DataTypes.BOOLEAN
  }
  
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;