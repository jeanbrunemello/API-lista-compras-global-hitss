const listasRepository = require('./listasRepository')
const produtosRepository = require('./produtosRepository')
const usuariosRepository = require('./usuariosRepository')

module.exports = {
listas: listasRepository,
produtos: produtosRepository,
usuarios: usuariosRepository
}