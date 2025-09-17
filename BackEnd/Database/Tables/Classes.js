//! Importações
const { DataTypes } = require("sequelize");
const database = require("../configdb");

const Classes = database.define("Classes", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  Class_Subject: {
    type: DataTypes.INTEGER,
  },
  Class_Course: {
    type: DataTypes.INTEGER,
  },
  Class_Image: {
    type: DataTypes.STRING,
  },
});

module.exports = Classes;
