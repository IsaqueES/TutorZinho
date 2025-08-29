const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res) => {
  const caminho = path.resolve(__dirname, "../../../FrontEnd/Src/Pages/index.html");
  res.sendFile(caminho);
});
router.get("/test",async (req,res)=>{
    res.send("FUNCIONOU!")
})
module.exports = router;
