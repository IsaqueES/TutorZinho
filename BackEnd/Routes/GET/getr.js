const express = require("express");
const router = express.Router();
const User = require("../../Database/Tables/User");
const Courses = require("../../Database/Tables/Courses");
const Subjects = require("../../Database/Tables/Subjects");
const Classes = require("../../Database/Tables/Classes");
const chalk = require("chalk");
const { where } = require("sequelize");
const Subscribes = require("../../Database/Tables/Subscribes");
const cl = console.log;
const blue = chalk.blue;
const red = chalk.red;
const green = chalk.green;
const yellow = chalk.yellow;

const Mensagem = (texto, arquivo, linha) => {
  cl(blue(texto), "|", red(arquivo + " " + linha));
};

//?USER API ->
router.get("/apiuser", async (req, res) => {
  try {
    const AllUser = await User.findAll();
    Mensagem("User Send", "getr.js", "21");
    res.json(AllUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários", details: error.message });
  }
});

//?IN USER API ->
router.get("/apiinuser/:idu", async (req, res) => {
  try {
    const userSubscriptions = await Subscribes.findAll({
      where: {
        User_Id: parseInt(req.params.idu),
      },
      include: [
        {
          model: Classes,
          include: 
            {
              model: Subjects,
              attributes: ["Subject_Name"], 
            },
        },
      ],
    });
    res.json(userSubscriptions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar inscrições do usuário", details: error.message });
  }
});

//?COURSERS API ->
router.get("/apicourse", async (req, res) => {
  try {
    const AllCourse = await Courses.findAll();
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
    const AllSubject = await Subjects.findAll();
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
          attributes: ["Subject_Name"],
        },
        {
          model: Courses,
          attributes: ["Course_Name"],
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

//?CLASSES API FILTERED->
router.get("/apiclassfilter", async (req, res) => {
  try {
    const allClasses = await Classes.findAll({
      include: [
        {
          model: Subjects,
          attributes: ["Subject_Name"],
        },
        {
          model: Courses,
          attributes: ["Course_Name"],
        },
      ],
    });
    const ListOfClasses = [];
    allClasses.forEach((classi) => {
      const existe = ListOfClasses.some(
        (c) => c.Subject === classi.Subject.Subject_Name
      );
      if (existe) {
        Mensagem("Already Exists", "getr.js", "98");
      } else {
        ListOfClasses.push({
          Subject: classi.Subject.Subject_Name,
          Course: classi.Course.Course_Name,
          Subject_ID: classi.Class_Subject,
          Course_ID: classi.Class_Course,
        });
      }
    });
    cl(yellow("---------------------------------------------------------"));
    res.send(ListOfClasses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar Classes", details: error.message });
  }
});

//? CLASSES API INCLASS ->
router.get("/apiinclass/:course/:id", async (req, res) => {
  const classes = await Classes.findAll({
    where: {
      Class_Subject: parseInt(req.params.id),
      Class_Course: parseInt(req.params.course),
    },
  });

  Mensagem("Class Visited", "getr.js", "123");
  res.json(classes);
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
  Mensagem("User Logged", "getr.js", "123");
  cl(yellow("---------------------------------------------------------"));
  res.json(usuariologado);
});

module.exports = router;
