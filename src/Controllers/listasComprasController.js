const express = require('express')
const services = require('../Services/index')
const router = express.Router();

class ListasComprasController {

    async buscarListas(request, response) {
        try {
            const listas = await services.listas.buscarListas();
            if (listas.length == 0 || listas == null) {
                return response.status(404).json({ message: 'listas não encontradas' })
            }
            return response.status(200).json(listas)
        } catch (err) {
            console.error(err)
            return response.status(500).json("não foi possível realizar a busca")
        }
    };

    async buscarListaPorId(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.buscarListaPorId(id);
            if (lista == null) {
                return response.status(400).json({ message: "lista não encontrada" })
            }
            return response.status(200).json(lista)
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "erro ao buscar a lista do ID indicado" })
        }
    };


    async cadastrarLista(request, response) {
        try {
            const lista = await services.listas.cadastrarLista(request.body);
            return response.sendStatus(201).json(lista);
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "não foi possível cadastrar a lista" })
        }
    };

    async editarLista(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.editarLista(id, request.body);
            if (lista == null) {
                return response.status(404).json({ message: "lista não encontrada" })
            }
            return response.status(200).json(lista);
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "não foi possível editar a lista" })
        }
    };

    async apagarLista(request, response) {
        try {
            const id = request.params.id;
            const lista = await services.listas.apagarLista(id);
            if (lista == null) {
                return response.status(404).json({ message: "erro ao tentar apagar a lista" })
            }
            return response.status(204).end();
        } catch (err) {
            console.error(err)
            return response.status(500).json({ message: "não foi possível editar a lista" })
        }
    }
}

module.exports = new ListasComprasController();
