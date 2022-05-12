const router = require("express").Router();
const Pessoa = require("../models/Pessoa");

router.post("/", async (req, res) => {
  const { nome, dataNasc } = req.body;

  const pessoa = {
    nome,
    dataNasc,
  };

  try {
    await Pessoa.create(pessoa);

    res
      .status(201)
      .json({ pessoa, message: "Pessoa inserida no sistema com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const pessoa = await Pessoa.find();

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pessoa = await Pessoa.findOne({ _id: id });

    if (!pessoa) {
      res.status(422).json({ pessoa: "Pessoa não encontrada!" });
      return;
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { nome, dataNasc } = req.body;

  const pessoa = {
    nome,
    dataNasc,
  };

  try {
    const updatedPessoa = await Pessoa.updateOne({ _id: id }, pessoa);

    if (updatedPessoa.matchedCount === 0) {
      res.status(422).json({ message: "Pessoa não encontrada!" });
      return;
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const pessoa = await Pessoa.findOne({ _id: id });

  if (!pessoa) {
    res.status(422).json({ message: "Pessoa não encontrada!" });
    return;
  }

  try {
    await Pessoa.deleteOne({ _id: id });

    res.status(200).json({ message: "Pessoa removida com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

module.exports = router;
