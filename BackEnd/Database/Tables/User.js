const {DataTypes} = require('sequelize')
const database = require('../configdb')
const User = database.define({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  User_Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  User_Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  User_Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  User_type: {
    type: DataTypes.ENUM,
    allowNull: false,
  }
});

module.exports = User;