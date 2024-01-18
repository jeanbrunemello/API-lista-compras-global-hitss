const express = require('express')
const services = require('../Services/index')
const router = express.Router();

class ProdutosController {

    async buscarProdutos(request, response) {
        try {
            const produtos = await services.produto.buscarProdutos();
            response.json(produtos)
        } catch (err) {
            console.error(err)
        }
    };

    async buscarProdutosPorListaId(request, response) {
        try {
            const id = request.params.id;
            const produtos = await services.produto.buscarProdutosPorListaId(id);
            response.json(produtos)
        } catch (err) {
            console.error(err)
        }
    };

    async buscarProdutoPorId(request, response) {
        try {
            const id = request.params.id;
            const produto = await services.produto.buscarProdutoPorId(id);
            response.json(produto)
        } catch (err) {
            console.error(err)
        }
    };

    async criarProduto(request, response) {
        try {
            const produto = await services.produto.cadastrarProduto(request.body);
            response.sendStatus(201);
            response.json(produto);
        } catch (err) {
            console.error(err)
        }
    };

    async editarProduto(request, response) {
        try {
            const id = request.params.id;
            const produto = await services.produto.editarProduto(id, request.body);
            response.sendStatus(200);
        } catch (err) {
            console.error(err)
        }
    };

    async apagarProduto(request, response) {
        try {
            const id = request.params.id;
            const produto = await services.produto.apagarProduto(id);
            response.sendStatus(204);
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = new ProdutosController();
