const express = require("express");
const getRoutes = require("./Routes/GET/getr");
const postRoutes = require("./Routes/POST/postr");

//? Sincronização com o Database
(async () => {
  const database = require("./Database/configdb");
  const User = require("./Database/Tables/User");
  const Classes = require("./Database/Tables/Classes");
  const Courses = require("./Database/Tables/Courses");
  const Subjects = require("./Database/Tables/Subjects");
  await database.sync(() => {
    console.log("tudo certo");
  });
})();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Usa as rotas GET e POST
app.use(getRoutes);
app.use(postRoutes);

//? Inicializando o Servidor
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
