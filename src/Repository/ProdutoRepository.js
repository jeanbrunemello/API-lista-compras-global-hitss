const database = require('../../db')
const models = require('../Models/index')

class ProdutoRepository {

    async buscarProdutos(){
        try {
            await database.sync();
            const produtos = await models.Produto.findAll();
            console.log(produtos)
            return produtos;
        } catch (erro) {
            console.error(erro)
        }
    }

    async buscarProdutoPorId(id) {
        try {
            await database.sync();
            const produtoPorId = await models.Produto.findAll({where: { listas_compras_id: id}});
            return produtoPorId;
        } catch (erro) {
            console.error(erro)
        }
    }

    async buscarProdutosPorListaId(listaId) {
        try {
            await database.sync();
            const produtoPorId = await models.Produto.findByPk(listaId);
            return produtoPorId;
        } catch (erro) {
            console.error(erro)
        }
    }

    async cadastrarProduto(lista) {
        try {
            await database.sync();
            const novoProduto = await models.Produto.create(lista)
            //return novaLista
        } catch (err) {
            console.error(`erro ao tentar cadastrar lista: ${err}`);
        }
    }

    async editarProduto(id, lista) {
        try {
            await database.sync();
            const ProdutoPorId = await models.Produto.findByPk(id);
            await ProdutoPorId.update(lista)
        } catch (err) {
            console.error(`erro ao tentar editar lista: ${err}`);
        }
    }

    async apagarProduto(id) {
        try {
            await database.sync();
            const produtoPorId = await models.Produto.findByPk(id);
            produtoPorId.destroy();
            return 'apagado com sucesso'
        } catch (err) {
            console.error(`erro ao tentar apagar lista: ${err}`);
        }
    }
}

module.exports = new ProdutoRepository();