const ListaComprasModel = require('./ListaComprasModel');
const ProdutoModel = require('./produtoModel');
const UsuarioModel = require('./UsuarioModel')

ListaComprasModel.hasMany(ProdutoModel, { as: 'produtos', foreignKey: 'listas_compras_id', onDelete: 'CASCADE', hooks: true });
ProdutoModel.belongsTo(ListaComprasModel, { as: 'lista_compra', foreignKey: 'listas_compras_id' });

ListaComprasModel.belongsTo(UsuarioModel, { as: 'usuario', foreignKey: 'usuario_lista' });
UsuarioModel.hasMany(ListaComprasModel, { as: 'listas_compras', foreignKey: 'usuario_lista' });

module.exports = {
    ListaCompras: ListaComprasModel,
    Produto:ProdutoModel,
    Usuario: UsuarioModel
}