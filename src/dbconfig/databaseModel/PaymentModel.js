const { Sequelize, DataTypes, UUID } = require("sequelize");
const User = require("./userDbModel");
const sequelize = new Sequelize("sqlite::memory:");


//this is all filds that can be used in payment
const Payment = sequelize.define("Payment", {
  owner: {
    type: DataTypes.NUMBER,
  },
  PayName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  PayId: {
    type: DataTypes.UUID,
    allowNull: false,
    UUID,
  },
  Description: {
    type: DataTypes.STRING(30),
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
  Price: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  Duedate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// `sequelize.define` also returns the model
module.exports = Payment;
