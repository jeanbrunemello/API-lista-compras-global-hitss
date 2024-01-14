const repositories = require('../Repository')

class ListasService {
    async buscarListas() {
        const listas = await repositories.listas.buscarListas();
        return listas;
    }

    async buscarListaPorId(id) {
        const lista = await repositories.listas.buscarListaPorId(id);
        return lista;
    }

    async cadastrarLista(requestBody) {
        const lista = await repositories.listas.cadastrarLista(requestBody);
        return lista;
    }

    async editarLista(id, requestBody) {
        const listas = await repositories.listas.editarLista(id, requestBody);
        return listas;
    }

    async apagarLista(id) {
        const listas = await repositories.listas.apagarLista(id);
        return listas;
    }
}

module.exports = new ListasService();