const listasRepository = require('./ListasComprasRepository')
const produtosRepository = require('./ProdutoRepository')
const usuariosRepository = require('./usuariosRepository')

module.exports = {
listas: listasRepository,
produto: produtosRepository,
usuario: usuariosRepository
}