const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), pessoas);
  app.get("/", (req, res) =>
    res.status(200).send({ mensagem: "Bem vindo a API" })
  );
};
