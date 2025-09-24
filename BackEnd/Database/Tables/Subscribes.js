const { DataTypes } = require("sequelize");
const database = require("../configdb");
const Subscribes = database.define("Subscribes", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = Subscribes;
