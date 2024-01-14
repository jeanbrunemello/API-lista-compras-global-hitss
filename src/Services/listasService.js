const db = require('../../db');
const repositories = require('../Repository')

async function getAllListas(){
    const listas = await repositories.listasRepository.selecionarListas();
    return listas;
}

async function getListaById(id){
    const lista = await repositories.listasRepository.selecionarListaById(id);
    return lista;
}

async function criaLista(requestBody){
    const lista = await repositories.listasRepository.criarLista(requestBody);
    return lista;
}

async function editaLista(id, requestBody){
    const listas = await repositories.listasRepository.editarLista(id,requestBody);
    return listas;
}

async function apagaLista(id){
    const listas = await repositories.listasRepository.apagarLista(id);
    return listas;
}

module.exports = {
    getAllListas,
    getListaById,
    criaLista,
    editaLista,
    apagaLista
}