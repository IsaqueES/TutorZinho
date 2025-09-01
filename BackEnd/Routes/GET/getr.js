const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../../Database/Tables/User");

router.get("/", (req, res) => {
  const caminho = path.resolve(
    __dirname,
    "../../../FrontEnd/Src/Pages/index.html"
  );
  res.sendFile(caminho);
});
router.get("/apiuser", async (req, res) => {
  try {
    const AllUser = await User.findAll(); // precisa do await
    res.json(AllUser);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários", details: error.message });
  }
});

module.exports = router;
