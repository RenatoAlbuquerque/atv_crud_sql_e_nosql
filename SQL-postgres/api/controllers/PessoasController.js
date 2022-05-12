const database = require("../models");

class UserController {
  static async pegarTodosUsuarios(req, res) {
    try {
      const todosUsuarios = await database.Pessoas.findAll();
      return res.status(200).json(todosUsuarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarUmUsuario(req, res) {
    const { id } = req.params;
    try {
      const umUsuario = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umUsuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async alterarUsuario(req, res) {
    const { id } = req.params;
    const novasInfo = req.body;
    try {
      await database.Pessoas.update(novasInfo, {
        where: {
          id: Number(id),
        },
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaUsuario(req, res) {
    const { nome, dataNasc } = req.body;
    try {
      const novoUsuarioCriado = await database.Pessoas.create({
        nome,
        dataNasc,
      });
      return res.status(201).json(novoUsuarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarUsuario(req, res) {
    const { id } = req.params;

    try {
      await database.Users.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ mensagem: `Id ${id} deletado` });
    } catch (error) {
      return res.status(500).json("Id não encontrado");
    }
  }
}

module.exports = UserController;
