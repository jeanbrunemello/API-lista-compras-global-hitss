const express = require('express')
const listaModel = require('../Models/listaModel')

const { getAllListasService, getListaByIdService, criaListaService, editaListaService, apagaListaService } = require('../Services/listasService');

const router = express.Router();

async function getAllListas(request, response) {
    console.log(response)
    try {
        const listas = await getAllListasService();
        response.json(listas)
    } catch (err) {
        console.error(err)
    }
};

async function getListaById (request, response) {
    const id = request.params.id;
    const lista = await getListaByIdService(id);
    response.json(lista)
};


async function criaLista(request, response) {

    try {
        const lista = await criaListaService(request.body);
        response.sendStatus(201);
        response.json(lista);
    } catch (err) {
        console.error(err)
    }

};

async function editaLista (request, response) {

    try {
        const id = request.params.id;
        const lista = await editaListaService(id, request.body);
        response.sendStatus(200);
    } catch (err) {
        console.error(err)
    }

};

async function apagaLista (request, response) {
    try {
        const id = request.params.id;
        const lista = await apagaListaService(id);
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
