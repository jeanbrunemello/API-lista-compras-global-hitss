const listasRepository = require('./listasComprasRepository')
const produtosRepository = require('./produtosRepository')
const usuariosRepository = require('./usuariosRepository')

module.exports = {
listas: listasRepository,
produtos: produtosRepository,
usuarios: usuariosRepository
}