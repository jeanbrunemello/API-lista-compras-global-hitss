const express = require('express')
const services = require('../Services/index')
const router = express.Router();

class ListasComprasController {

    async buscaTodasListas(request, response) {
        try {
            const listas = await services.listas.getAllListas();
            response.json(listas)
        } catch (err) {
            console.error(err)
        }
    };

    async buscaListaPorId(request, response) {
        try {
            const id = request.params.id;
            const lista = await await services.listas.getListaById(id);
            response.json(lista)
        } catch (err) {
            console.error(err)
        }
    };


    async criaLista(request, response) {
        try {
            const lista = await services.listas.criaLista(request.body);
            response.sendStatus(201);
            response.json(lista);
        } catch (err) {
            console.error(err)
        }

    };

    async editaLista(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.editaLista(id, request.body);
            response.sendStatus(200);
        } catch (err) {
            console.error(err)
        }
    };

    async apagaLista(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.apagaLista(id);
            response.sendStatus(204);
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = new ListasComprasController();
