//! Importações
const { DataTypes } = require("sequelize");
const database = require("../configdb");
const Courses = database.define("Courses", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  Course_Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Courses;
