const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Express Criado.");
});

app.get("/admin", (req, res) => {
  res.send("Acesso apenas para administradores.");
});

app.get("admin/:id", (req, res) => {
  res.send("Acesso apenas para administradores com id",+req.params.id);
});

app.get("/mod", (req, res) => {
  res.send("Acesso apenas para Moderadores.");
});

app.listen(3000, () => {
  console.log("Servidor Express Rodando na http://localhost:3000");
});
