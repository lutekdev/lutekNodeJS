require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("MongoDB Conectado com Sucesso!");
});

// HABILITAR O USO DO JSON
app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

// LISTER EXPRESS
app.listen(3000, () => {
    console.log("Servidor Express Rodando na http://localhost:3000");
});
