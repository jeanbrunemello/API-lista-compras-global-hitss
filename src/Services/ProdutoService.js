const repositories = require('../Repository')

class ProdutoService {
    async buscarProdutos() {
        const produtos = await repositories.produto.buscarProdutos();
        return produtos;
    }

    async buscarProdutosPorListaId(id) {
        const produtos = await repositories.produto.buscarProdutosPorListaId(id);
        return produtos;
    }

    async buscarProdutoPorId(id) {
        const produto = await repositories.produto.buscarProdutoPorId(id)
        return produto
    }

    async cadastrarProduto(requestBody) {
        const lista = await repositories.produto.cadastrarProduto(requestBody);
        return lista;
    }

    async editarProduto(id, requestBody) {
        const listas = await repositories.produto.editarProduto(id, requestBody);
        return listas;
    }

    async apagarProduto(id) {
        const listas = await repositories.produto.apagarProduto(id);
        return listas;
    }
}

module.exports = new ProdutoService();