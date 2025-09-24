const express = require("express");
const router = express.Router();
//? Importação de Tabelas
const User = require("../../Database/Tables/User");
const Class = require("../../Database/Tables/Classes");
const Course = require("../../Database/Tables/Courses");
const Subject = require("../../Database/Tables/Subjects");
const Subscribes = require("../../Database/Tables/Subscribes");

//?SUBSCRIBE
router.post("/subscribe/:idc/:idu/:web", async (req, res) => {
  try {
    const NewSub = await Subscribes.create({
      Class_Id: 1,
      User_Id: 1,
    });
    res.redirect("http://localhost:5173");
  } catch (error) {
    console.error(error);
  }
});

router.post("/adduser", async (req, res) => {
  try {
    //* Boa pratica(Basicamente necessaria aksdsadkasdsd)
    const bodydata = req.body;
    const newuser = await User.create({
      User_Name: bodydata.name,
      User_Email: bodydata.email,
      User_Password: bodydata.password,
      User_Type: bodydata.type,
    });
    res.redirect("http://localhost:5173");
  } catch (error) {
    console.error(error);
  }
});

router.post("/addcourse", async (req, res) => {
  try {
    const bodydata = req.body;
    const newcourse = await Course.create({
      Course_Name: bodydata.name,
    });
    res.redirect("http://localhost:5173");
  } catch (error) {
    console.error(error);
  }
});
router.post("/addsubject", async (req, res) => {
  try {
    const bodydata = req.body;
    const newclass = await Subject.create({
      Subject_Name: bodydata.name,
    });
    res.redirect("http://localhost:5173");
  } catch (error) {
    console.error(error);
  }
});
router.post("/addclass", async (req, res) => {
  const SUBJECT_DATA = Subject.findPK;
  try {
    const bodydata = req.body;
    const newclass = await Class.create({
      Class_Subject: bodydata.subject,
      Class_Course: bodydata.course,
      Class_Image: bodydata.imgurl,
    });
    res.redirect("http://localhost:5173");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
