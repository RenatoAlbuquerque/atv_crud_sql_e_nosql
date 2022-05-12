const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");
const router = Router();

router.post("/users", PessoasController.criaUsuario);
router.get("/users/:id", PessoasController.pegarUmUsuario);
router.put("/users/:id", PessoasController.alterarUsuario);
router.get("/users", PessoasController.pegarTodosUsuarios);
router.delete("/users/:id", PessoasController.deletarUsuario);

module.exports = router;
