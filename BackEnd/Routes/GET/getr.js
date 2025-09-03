const express = require("express");
const router = express.Router();
const User = require("../../Database/Tables/User");
const Course = require("../../Database/Tables/Courses");
const Subjects = require("../../Database/Tables/Subjects");
const Classes = require("../../Database/Tables/Classes");

//?USER API ->
router.get("/apiuser", async (req, res) => {
  try {
    const AllUser = await User.findAll(); // precisa do await
    res.json(AllUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários", details: error.message });
  }
});

//?COURSERS API ->
router.get("/apicourse", async (req, res) => {
  try {
    const AllCourse = await Course.findAll(); // precisa do await
    res.json(AllCourse);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar Cursos", details: error.message });
  }
});

//?SUBJECT API ->
router.get("/apisubject", async (req, res) => {
  try {
    const AllSubject = await Subjects.findAll(); // precisa do await
    res.json(AllSubject);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar Materias", details: error.message });
  }
});

//?CLASSES API ->
router.get("/apiclass", async (req, res) => {
  try {
    const allClasses = await Classes.findAll({
      include: [
        {
          model: Subjects,
          attributes: ["Subject_Name"], // só o nome da matéria
        },
        {
          model: Courses,
          attributes: ["Course_Name"], // só o nome do curso
        },
      ],
    });

    res.json(allClasses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar Classes", details: error.message });
  }
});

//?USER LOGIN ->
router.get("/checklogin", async (req, res) => {
  const email = req.query.email;
  const senha = req.query.password;

  const usuariologado = await User.findOne({
    where: {
      User_Password: senha,
      User_Email: email,
    },
  });

  res.json(usuariologado);
});

module.exports = router;
