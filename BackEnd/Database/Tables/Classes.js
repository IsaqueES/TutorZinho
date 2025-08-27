//! Importações
const { DataTypes } = require("sequelize");
const database = require("../configdb");
const Courses = require('./Courses')
const Subjects = require('./Subjects')

const Classes = database.define({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
    },
    Class_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Class_Subject: {
        type: Sequelize.INTEGER,
        references: {
        model: Subjects,
        key: "id",
    }},
    Class_Course:{
        type: Sequelize.INTEGER,
        references: {
        model: Courses,
        key: "id",
    }}
});

module.exports = Classes;
