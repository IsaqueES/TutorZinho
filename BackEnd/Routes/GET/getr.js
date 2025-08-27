const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res) => {
  const caminho = path.resolve(__dirname, "../../../FrontEnd/Src/Pages/index.html");
  res.sendFile(caminho);
});

module.exports = router;
