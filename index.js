// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
require ('dotenv').config();

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/remove-bg", upload.single("image"), async (req, res) => {
  try {
    const filePath = req.file.path;

    const form = new FormData();
    form.append("image_file", fs.createReadStream(filePath));
    form.append("size", "auto");

    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      form,
      {
        responseType: "arraybuffer",
        headers: {
          ...form.getHeaders(),
          "X-Api-Key": process.env.REMOVE_BG_API_KEY,
        },
      }
    );

    fs.unlinkSync(filePath); 
    res.set("Content-Type", "image/png");
    res.send(response.data);
  } catch (error) {
    console.error("Erro ao remover fundo:", error.message);
    res.status(500).send("Erro ao remover fundo da imagem");
  }
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
