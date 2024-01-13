const express = require('express');
const router = express.Router();
const { getAllListas, getListaById, criaLista, editaLista, apagaLista } = require('../Controllers/listasController');

router.get('/', getAllListas);
router.get('/:id', getListaById);
router.post('/', criaLista);
router.patch('/:id', editaLista);
router.delete('/:id', apagaLista);

module.exports = router;