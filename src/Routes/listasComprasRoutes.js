const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/index')

router.get('/', controllers.listas.buscaTodasListas);
router.get('/:id', controllers.listas.buscaListaPorId);
router.post('/', controllers.listas.criaLista);
router.patch('/:id', controllers.listas.editaLista);
router.delete('/:id', controllers.listas.apagaLista);

module.exports = router;