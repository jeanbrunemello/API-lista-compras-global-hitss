const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/index')

router.get('/', controllers.listas.buscarListas);
router.get('/:id', controllers.listas.buscarListaPorId);
router.post('/', controllers.listas.cadastrarLista);
router.patch('/:id', controllers.listas.editarLista);
router.delete('/:id', controllers.listas.apagarLista);

module.exports = router;