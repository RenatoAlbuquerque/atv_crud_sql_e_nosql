const mongoose = require("mongoose");

const Pessoa = mongoose.model("Pessoa", {
  nome: String,
  dataNasc: Number,
});

module.exports = Pessoa;
