const express = require('express')
const services = require('../Services/index')
const router = express.Router();

class ProdutosController {

    async buscarProdutos(request, response) {
        try {
            const produtos = await services.produto.buscarProdutos();
            if (produtos.length == 0 || produtos == null) {
                return response.status(404).json({ message: 'nenhum produto encontrado' })
            }
            response.status(200).json(produtos)
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: 'não foi possível buscar os produtos' })
        }
    };

    async buscarProdutosPorListaId(request, response) {
        try {
            const id = request.params.id;
            const produtos = await services.produto.buscarProdutosPorListaId(id);
            if (produtos.length == 0 || produtos == null) {
                return response.status(404).json({ message: 'nenhum produto encontrado nessa lista' })
            }
            return response.status(200).json(produtos)
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "erro ao buscar produtos da lista" })
        }
    };

    async buscarProdutoPorId(request, response) {
        try {
            const id = request.params.id;
            const produto = await services.produto.buscarProdutoPorId(id);
            if (produto.length == 0 || produto == null) {
                return response.status(404).json({ message: 'produto não encontrado' })
            }
            return response.status(200).json(produto)
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "erro ao buscar produto" })
        }
    };

    async criarProduto(request, response) {
        try {
            const produto = await services.produto.cadastrarProduto(request.body);
            return response.status(201).json(produto);
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "erro ao cadastrar produto" })
        }
    };

    async editarProduto(request, response) {
        try {
            const id = request.params.id;
            const produto = await services.produto.editarProduto(id, request.body);
            if (produto.length == 0 || produto == null) {
                return response.status(404).json({ message: 'produto não encontrado' })
            }
            return response.status(200).json(produto);
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "erro ao editar produto" })
        }
    };

    async apagarProduto(request, response) {
        try {
            const id = request.params.id;
            const produto = await services.produto.apagarProduto(id);
            if (produto.length == 0 || produto == null) {
                return response.status(404).json({ message: 'produto não encontrado' })
            }
            return response.status(204).end();
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "erro ao apagar produto" })
        }
    }
}

module.exports = new ProdutosController();
