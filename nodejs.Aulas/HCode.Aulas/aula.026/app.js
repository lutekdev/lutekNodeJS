const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const cookieParser = require("cookie-parser");

/**
 * LINK DE ACESSO:
 * http://localhost:3000
 *
 * LINK DE MIDDLEWARE
 * https://expressjs.com/en/resources/middleware.html
 */

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
// app.use("/static", express.static("public"));

app.use((req, res, next) => {
  console.log("Autenticando... Middleware em Nível de Aplicação.");

  return next();
});

function logReq(req, res, next) {
  console.log(`Requisição: ${req.method} ${req.url}`);
  return next();
}

app.get("/set-cookie", (req, res) => {
  res.cookie("user", "Lutek", { maxAge: 1000 * 60 * 60 * 24 }); // 1 dia
  res.send("Cookie Do Usuário Criado!");
});

app.get("/get-cookie", (req, res) => {
  let user = req.cookies["user"];
  if (user) {
    return res.send(user);
  }
});

app.get("/", logReq, (req, res) => {
  res.send("Servidor Express Criado.");
});

app.use("/admin", adminRoutes);

app.get("*", (req, res, next) => {
  setImmediate(() => {
    next(new Error("Temos um Problema!!"));
  });
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send("Geramos um erro, veja as instruções para corrigir.");
  // console.log("Erro: " + err.message);
  // res.send("Erro: " + err.message);
  // res.status(500).json({ message: err.message });
});

// ENVIANDO LISTEN
app.listen(3000, () => {
  console.log("Servidor Express Rodando na http://localhost:3000");
});
