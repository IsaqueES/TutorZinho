const express = require("express");
const router = express.Router();
const User = require("../../Database/Tables/User");

router.post("/adduser", async (req, res) => {
    const dadosbody = req.body
     const novousuario = await User.create({
        User_Name: dadosbody.name,
        User_Email: dadosbody.email,
        User_Password: dadosbody.password,
        User_type: dadosbody.type
    });
    res.redirect("/"); 
});

module.exports = router;
