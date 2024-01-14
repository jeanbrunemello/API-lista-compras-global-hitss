const express = require('express')
const services = require('../Services/index')
const router = express.Router();

async function buscaTodasListas(request, response) {
    console.log(response)
    try {
        const listas = await services.listas.getAllListas();
        response.json(listas)
    } catch (err) {
        console.error(err)
    }
};

async function buscaListaPorId (request, response) {
    const id = request.params.id;
    const lista = await await services.listas.getListaById(id);
    response.json(lista)
};


async function criaLista(request, response) {

    try {
        const lista = await services.listas.criaLista(request.body);
        response.sendStatus(201);
        response.json(lista);
    } catch (err) {
        console.error(err)
    }

};

async function editaLista (request, response) {

    try {
        const id = request.params.id;
        const lista = await services.listas.editaLista(id, request.body);
        response.sendStatus(200);
    } catch (err) {
        console.error(err)
    }

};

async function apagaLista (request, response) {
    try {
        const id = request.params.id;
        const lista = await services.listas.apagaLista(id);
        response.sendStatus(204);
    } catch (err) {
        console.error(err)
    }

}

module.exports = {
    buscaTodasListas,
    buscaListaPorId,
    criaLista,
    editaLista,
    apagaLista
}
