// config inicial
const express = require("express");
const app = express();
require("dotenv").config();

// depois do db
const mongoose = require("mongoose");

const pessoasRoute = require("./routes/pessoasRoute");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use("/pessoas", pessoasRoute);

app.get("/", (req, res) => {
  res.json({ message: "Oi Express!" });
});

mongoose
  //process.env.MONGO_URI --> Adicionar no arquivo .env
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
