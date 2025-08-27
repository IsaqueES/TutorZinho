const Sequelize = require("sequelize"); // Importação do sequelize , está em maiuscula por ser uma {CLASSE}

const sequelize = new Sequelize( // Item da classe
  "postgresql://postgres.gjyakmgtkmmeqqgdxavo:6TSPKZ0qZcJEAQXI@aws-1-sa-east-1.pooler.supabase.com:6543/postgres",
  {
    dialect: "postgres",
    logging: console.log,
  }
);

module.exports = sequelize;
