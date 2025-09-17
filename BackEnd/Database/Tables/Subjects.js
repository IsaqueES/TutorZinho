const { DataTypes } = require("sequelize");
const database = require("../configdb");
const Subjects = database.define("Subjects", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  Subject_Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Subjects;
