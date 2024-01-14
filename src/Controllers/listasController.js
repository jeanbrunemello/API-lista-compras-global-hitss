const express = require('express')
//const { getAllListas, getListaById, criaLista, editaLista, apagaLista } = require('../Services/listasService');
const services = require('../Services/index')
const router = express.Router();

async function getAllListas(request, response) {
    console.log(response)
    try {
        const listas = await services.listaService.getAllListas();
        response.json(listas)
    } catch (err) {
        console.error(err)
    }
};

async function getListaById (request, response) {
    const id = request.params.id;
    const lista = await await services.listaService.getListaById(id);
    response.json(lista)
};


async function criaLista(request, response) {

    try {
        const lista = await services.listaService.criaLista(request.body);
        response.sendStatus(201);
        response.json(lista);
    } catch (err) {
        console.error(err)
    }

};

async function editaLista (request, response) {

    try {
        const id = request.params.id;
        const lista = await services.listaService.editaLista(id, request.body);
        response.sendStatus(200);
    } catch (err) {
        console.error(err)
    }

};

async function apagaLista (request, response) {
    try {
        const id = request.params.id;
        const lista = await services.listaService.apagaLista(id);
        response.sendStatus(204);
    } catch (err) {
        console.error(err)
    }

}

module.exports = {
    getAllListas,
    getListaById,
    criaLista,
    editaLista,
    apagaLista
}
