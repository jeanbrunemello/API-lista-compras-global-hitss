const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/index')

router.get('/', controllers.produto.buscarProdutos);
router.get('/:id', controllers.produto.buscarProdutoPorId);
router.post('/', controllers.produto.criarProduto);
router.patch('/:id', controllers.produto.editarProduto);
router.delete('/:id', controllers.produto.apagarProduto);

module.exports = router;