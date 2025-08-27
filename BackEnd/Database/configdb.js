const Sequelize = require("sequelize"); // Importação do sequelize , está em maiuscula por ser uma {CLASSE}

const sequelize = new Sequelize( // Item da classe
  "postgresql://postgres.ydskjtqsslmrjsnnexuq:YyEYreWel0QMi4sV@aws-1-sa-east-1.pooler.supabase.com:6543/postgres",
  {
    dialect: "postgres",
    logging: true, // opcional
  }
);

module.exports = sequelize;
