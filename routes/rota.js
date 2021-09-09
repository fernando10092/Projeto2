const express = require("express");

const paginas = require("../controllers/control");

const router = express.Router();

router.use("/index", paginas.index);

router.use("/login", paginas.login);

router.use("/professor", paginas.professor);

router.use("/cadastro", paginas.cadastro);

router.use("/cursos", paginas.cursos);

router.use("/intranet", paginas.intranet);

router.use("/teste", paginas.teste);

module.exports = router;