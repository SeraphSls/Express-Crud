const express = require('express')
const router = express.Router()
const AlunoController = require('../controller/alunos.controller');
// traz todos os registros
router.get('/', AlunoController.findAll);
// cria um novo aluno
router.post('/', AlunoController.create);
// traz os dados de um aluno de id especifico
router.get('/:id', AlunoController.findById);
// atualiza os dados de um aluno com determinado id
router.put('/:id', AlunoController.update);
// apaga um aluno de determinado id
router.delete('/:id', AlunoController.delete);

module.exports = router