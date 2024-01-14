const express = require('express')
const services = require('../Services/index')
const router = express.Router();

class ListasComprasController {

    async buscarListas(request, response) {
        try {
            const listas = await services.listas.buscarListas();
            response.json(listas)
        } catch (err) {
            console.error(err)
        }
    };

    async buscarListaPorId(request, response) {
        try {
            const id = request.params.id;
            const lista = await await services.listas.buscarListaPorId(id);
            response.json(lista)
        } catch (err) {
            console.error(err)
        }
    };


    async cadastrarLista(request, response) {
        try {
            const lista = await services.listas.cadastrarLista(request.body);
            response.sendStatus(201);
            response.json(lista);
        } catch (err) {
            console.error(err)
        }

    };

    async editarLista(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.editarLista(id, request.body);
            response.sendStatus(200);
        } catch (err) {
            console.error(err)
        }
    };

    async apagarLista(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.apagarLista(id);
            response.sendStatus(204);
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = new ListasComprasController();
