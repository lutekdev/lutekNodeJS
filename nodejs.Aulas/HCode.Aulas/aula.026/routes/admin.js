const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Servidor Express Criado.");
});

// GET - RECUPERAR
router.get("/", (req, res) => {
  res.send("Acesso apenas para administradores.");
});

// PARÂMETROS
router.get("/:id", (req, res) => {
  res.send(`Acesso apenas para administradores com ID: ${req.params.id}`);
});

// POST - ENVIAR
router.post("/", (req, res) => {
  const body = `Login ${req.body.login} Senha: ${req.body.senha}`;
  res.send(`Informações do Acesso POST: ${body}`);
});

// PATCH - ALTERAR APENAS ALGUMAS INFORMAÇÕES
router.patch("/:id", (req, res) => {
  res.send(`Acessando Informações Via Patch`);
});

// DELETE - DELETAR
router.delete("/:id", (req, res) => {
  res.send(`Deletando o ID: ${req.params.id}`);
});

// PARA USAR EM OUTRO LUGAR;
module.exports = router;
