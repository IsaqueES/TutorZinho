const { DataTypes } = require("sequelize");
const database = require("../configdb");
const Subscribes = database.define("subscribes", {
  Class_Id: DataTypes.INTEGER,
  User_Id: DataTypes.INTEGER,
});

module.exports = Subscribes;
