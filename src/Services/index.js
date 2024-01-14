const listaService = require('./ListasComprasService');
const produtoService = require('./ProdutoService')

module.exports = {
    listas: listaService,
    produto: produtoService
}