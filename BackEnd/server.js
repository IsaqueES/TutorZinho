//? Bibliotecas
const express = require("express");
const getRoutes = require("./Routes/GET/getr");
const postRoutes = require("./Routes/POST/postr");
const path = require("path");
const cors = require("cors");
//? Sincronização com o Database

(async () => {
  const database = require("./Database/configdb");

  const User = require("./Database/Tables/User");
  const Classes = require("./Database/Tables/Classes");
  const Courses = require("./Database/Tables/Courses");
  const Subjects = require("./Database/Tables/Subjects");

  //? Relacionamento de Tabelas
  Courses.hasMany(Classes, { foreignKey: "Class_Course" });
  Classes.belongsTo(Courses, { foreignKey: "Class_Course" });

  Subjects.hasMany(Classes, { foreignKey: "Class_Subject" });
  Classes.belongsTo(Subjects, { foreignKey: "Class_Subject" });

  await database.sync({ force: false });
  console.log("Banco sincronizado com sucesso ✅");
})();

const app = express();

app.use(
  "/assets",
  express.static(path.join(__dirname, "..", "FrontEnd", "Src", "Assets"))
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Usa as rotas GET e POST
app.use(getRoutes);
app.use(postRoutes);

//? Inicializando o Servidor
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
