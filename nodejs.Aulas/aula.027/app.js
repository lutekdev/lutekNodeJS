const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.use(multer().any(

// ))

app.get("/", (req, res) => {
  //   res.send("Servidor Express Criado.");
  res.sendFile(__dirname + "/index.html");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send(__dirname + "/index.html");
});

app.post("/upload", upload.single("arquivo"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  //   res.send(file);
  res.send(
    `Arquivo de Nome: ${file.originalname} foi enviado com sucesso, com tamanho de ${file.size}`
  );

  //   const fileInfo = {
  //     originalname: file.originalname,
  //     size: file.size,
  //     mimetype: file.mimetype,
  //   };

  //   res.json(fileInfo);
});

app.listen(3000, () => {
  console.log("Servidor Express Rodando na http://localhost:3000");
});
