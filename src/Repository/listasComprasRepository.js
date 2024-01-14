const database = require('../../db')
const models = require('../Models/index')

class ListasComprasRepository {

    async buscarListas(){
        try {
            await database.sync();
            const listas = await models.lista.findAll();
            console.log(listas)
            return listas;
        } catch (erro) {
            console.error(erro)
        }
    }

    async buscarListaPorId(id) {
        try {
            await database.sync();
            const listaPorId = await models.lista.findByPk(id);
            return listaPorId;
        } catch (erro) {
            console.error(erro)
        }
    }

    async criarLista(lista) {
        try {
            await database.sync();
            const novaLista = await models.lista.create(lista)
            //return novaLista
        } catch (err) {
            console.error(`erro ao tentar cadastrar lista: ${err}`);
        }
    }

    async editarLista(id, lista) {
        try {
            await database.sync();
            const listaById = await models.lista.findByPk(id);
            await listaById.update(lista)
        } catch (err) {
            console.error(`erro ao tentar editar lista: ${err}`);
        }
    }

    async apagarLista(id) {
        try {
            await database.sync();
            const listaById = await models.lista.findByPk(id);
            listaById.destroy();
            return 'apagado com sucesso'
        } catch (err) {
            console.error(`erro ao tentar apagar lista: ${err}`);
        }
    }
}

module.exports = new ListasComprasRepository();