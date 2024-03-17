require("dotenv").config();

const express = require("express");
const app = express();

const db = require("./database/db");
const tools = require("./assets/tools/utils");

const hostname = process.env.HOSTNAME;
const host_clientes = process.env.DB_HOST_CLIENTS;

// CRIANDO CONEXÃO COM O BANCO DE DADOS
const db_client = db.createConn(host_clientes);

// CRIANDO ROUTES
const clientRouters = require("./routes/clients");

// USAR JSON NO PROJETO - Middleware
app.use(express.json());

// USANDO ARQUIVOS ESTÁTICOS - Middleware
app.use(express.static("public"));

// ROTAS
app.use("/clients", clientRouters);

// CHECANDO SE CONEXÃO COM O BANCO DE DADOS ESTÁ FUNCIONANDO
db.checkConn(db_client);

app.listen(3000, () => {
  console.log(
    tools.colorRGB(`• SuperMarket RestAPI: Rodando no IP: ${hostname}`, "cyan")
  );
});
