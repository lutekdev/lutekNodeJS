const express = require("express");
const app = express();

/** REQUISIÇÃO, RESPONSE(RESPOSTA) */
app.get("/", (req, res) => {
  // res.statusCode = 200
  res.send("Servidor Express Criado.");
});

app.get("/admin", (req, res) => {
  // res.statusCode = 200
  res.send("Acesso apenas para administradores.");
});

app.listen(3000, () => {
  console.log("Servidor Express Rodando na http://localhost:3000");
});
