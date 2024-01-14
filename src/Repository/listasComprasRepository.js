const database = require('../../db')
const models = require('../Models/index')

class ListasComprasRepository {

    async buscarListas(){
        try {
            await database.sync();
            const listas = await models.ListaCompras.findAll();
            console.log(listas)
            return listas;
        } catch (erro) {
            console.error(erro)
        }
    }

    async buscarListaPorId(id) {
        try {
            await database.sync();
            const listaPorId = await models.ListaCompras.findByPk(id);
            return listaPorId;
        } catch (erro) {
            console.error(erro)
        }
    }

    async cadastrarLista(lista) {
        try {
            await database.sync();
            const novaLista = await models.ListaCompras.create(lista)
            //return novaLista
        } catch (err) {
            console.error(`erro ao tentar cadastrar lista: ${err}`);
        }
    }

    async editarLista(id, lista) {
        try {
            await database.sync();
            const listaById = await models.ListaCompras.findByPk(id);
            await listaById.update(lista)
        } catch (err) {
            console.error(`erro ao tentar editar lista: ${err}`);
        }
    }

    async apagarLista(id) {
        try {
            await database.sync();
            const listaById = await models.ListaCompras.findByPk(id);
            listaById.destroy();
            return 'apagado com sucesso'
        } catch (err) {
            console.error(`erro ao tentar apagar lista: ${err}`);
        }
    }
}

module.exports = new ListasComprasRepository();