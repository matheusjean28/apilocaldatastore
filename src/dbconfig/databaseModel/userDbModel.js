const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
);

// `sequelize.define` also returns the model
module.exports = User;
