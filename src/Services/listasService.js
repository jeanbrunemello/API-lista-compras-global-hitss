const db = require('../../db');
const repositories = require('../Repository')

class ListasService {
    async getAllListas() {
        const listas = await repositories.listas.buscarListas();
        return listas;
    }

    async getListaById(id) {
        const lista = await repositories.listas.buscarListaPorId(id);
        return lista;
    }

    async criaLista(requestBody) {
        const lista = await repositories.listas.criarLista(requestBody);
        return lista;
    }

    async editaLista(id, requestBody) {
        const listas = await repositories.listas.editarLista(id, requestBody);
        return listas;
    }

    async apagaLista(id) {
        const listas = await repositories.listas.apagarLista(id);
        return listas;
    }
}

module.exports = new ListasService();