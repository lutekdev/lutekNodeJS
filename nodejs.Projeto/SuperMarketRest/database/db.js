const mongoose = require("mongoose");
const tools = require("../assets/tools/utils");

const createConn = (db_host) => {
  mongoose.connect(db_host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
};

const checkConn = (db_conn) => {
  db_conn.on("error", () => {
    return console.log(
      tools.colorRGB(`✘ MongoDB: Erro na conexão com o Database.`, "red")
    );
  });

  db_conn.once("open", () => {
    console.log(tools.colorRGB(`✓ MongoDB: Conectado ao Database.`));
  });
};

const createSchema = (jsonObject) => {
  return new mongoose.Schema(jsonObject);
};

module.exports = {
  createConn,
  checkConn,
  createSchema,
};
