const db = require('../../db');
const repositories = require('../Repository')

async function getAllListasService(){
    const listas = await repositories.listasRepository.selecionarListas();
    return listas;
}

async function getListaByIdService(id){
    const lista = await repositories.listasRepository.selecionarListaById(id);
    return lista;
}

async function criaListaService(requestBody){
    const lista = await repositories.listasRepository.criarLista(requestBody);
    return lista;
}

async function editaListaService(id, requestBody){
    const listas = await repositories.listasRepository.editarLista(id,requestBody);
    return listas;
}

async function apagaListaService(id){
    const listas = await repositories.listasRepository.apagarLista(id);
    return listas;
}

module.exports = {
    getAllListasService,
    getListaByIdService,
    criaListaService,
    editaListaService,
    apagaListaService
}