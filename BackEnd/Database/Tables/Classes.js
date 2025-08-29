//! Importações
const { DataTypes } = require("sequelize");
const database = require("../configdb");
const Courses = require('./Courses')
const Subjects = require('./Subjects')

const Classes = database.define("Classes", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  Class_Subject: {
    type: DataTypes.INTEGER,
    references: {
      model: Subjects,
      key: "id",
    },
  },
  Class_Course: {
    type: DataTypes.INTEGER,
    references: {
      model: Courses,
      key: "id",
    },
  },
  Class_Image:{
    type:DataTypes.STRING
  }
});

module.exports = Classes;
