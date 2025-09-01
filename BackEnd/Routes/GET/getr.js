const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../../Database/Tables/User");
const Course = require("../../Database/Tables/Courses");
const Subjects = require("../../Database/Tables/Subjects");
const Classes = require("../../Database/Tables/Classes");

router.get("/", (req, res) => {
  const caminho = path.resolve(
    __dirname,
    "../../../FrontEnd/Src/Pages/index.html"
  );
  res.sendFile(caminho);
});

//?USER API ->
router.get("/apiuser", async (req, res) => {
  try {
    const AllUser = await User.findAll(); // precisa do await
    res.json(AllUser);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários", details: error.message });
  }
});

//?COURSERS API ->
router.get("/apicourse", async (req, res) => {
  try {
    const AllCourse = await Course.findAll(); // precisa do await
    res.json(AllCourse);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Cursos", details: error.message });
  }
});

//?SUBJECT API ->
router.get("/apisubject", async (req, res) => {
  try {
    const AllSubject = await Subjects.findAll(); // precisa do await
    res.json(AllSubject);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Materias", details: error.message });
  }
});

//?CLASS API ->
router.get("/apiclass", async (req, res) => {
  try {
    const AllClasses = await Classes.findAll(); // precisa do await
    res.json(AllClasses);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Materias", details: error.message });
  }
});

module.exports = router;
