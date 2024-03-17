const mongoose = require("mongoose");
const db = require("../database/db");

const schema = {
  _id: {
    type: String,
    required: true,
  },

  nome: {
    type: String,
    required: true,
  },

  fone: {
    type: String,
    required: true,
  },

  date_created: {
    type: Date,
    default: Date.now,
  },
};

const schema_cliente = db.createSchema(schema);
module.exports = mongoose.model("Client", schema_cliente);
