const ListaComprasModel = require('./ListaComprasModel');
const ProdutoModel = require('./produtoModel');

ListaComprasModel.hasMany(ProdutoModel, { as: 'produtos', foreignKey: 'listas_compras_id', onDelete: 'CASCADE', hooks: true });
ProdutoModel.belongsTo(ListaComprasModel, { as: 'lista_compra', foreignKey: 'listas_compras_id' });

module.exports = {
    ListaCompras: ListaComprasModel,
    Produto:ProdutoModel,
}