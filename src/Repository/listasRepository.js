const database = require('../../db')
//const listaCompras = require('../Models/listaModel')
const models = require('../Models/index')

async function selecionarListas() {

    try {
        await database.sync();
        //const selectListas = await listaCompras.findAll();
        const selectListas = await models.listaModel.findAll();
        console.log(selectListas)
        return selectListas;
    } catch (erro) {
        console.error(erro)
    }
}

async function selecionarListaById(id) {
    try {
        await database.sync();
        const listaById = await models.listaModel.findByPk(id);
        return listaById;
    } catch (erro) {
        console.error(erro)
    }
}

async function criarLista(lista) {
    try {
        await database.sync();
        const novaLista = await models.listaModel.create(lista)
        //return novaLista
    } catch (err) {
        console.error(`erro ao tentar cadastrar lista: ${err}`);
    }
}

async function editarLista(id, lista) {
    try {
        await database.sync();
        const listaById = await models.listaModel.findByPk(id);
        await listaById.update(lista)
    } catch (err) {
        console.error(`erro ao tentar editar lista: ${err}`);
    }
}

async function apagarLista(id) {
    try {
        await database.sync();
        const listaById = await models.listaModel.findByPk(id);
        listaById.destroy();
        return 'apagado com sucesso'
    } catch (err) {
        console.error(`erro ao tentar apagar lista: ${err}`);
    }

}

// async function selecionarListas() {
//     const client = await db.connect();
//     try {
//         const result = await client.query("select * from listas_compras");
//         //console.log('Result:', result.rows);
//         return result.rows;
//     } catch (erro) {
//         console.error(erro)
//     }
// }

// async function selecionarListaById(id) {
//     const client = await db.connect();
//     try {
//         const request = await client.query("SELECT * FROM listas_compras where id=$1;", [id]);
//         return request.rows;
//     } catch (erro) {
//         console.error(erro)
//     }
// }

// async function criarLista(lista) {
//     try {
//         const client = await db.connect();
//         const sqlQuery = "insert into listas_compras(nome_lista) values ($1)"
//         const request = await client.query(sqlQuery, [lista.nome_lista]);
//     } catch (err) {
//         console.error(`erro ao tentar cadastrar lista: ${err}`);
//     }
// }

// async function editarLista(id, lista) {
//     try {
//         const client = await db.connect();
//         const sqlQuery = "update listas_compras set nome_lista=$1 where id=$2"
//         const request = await client.query(sqlQuery, [lista.nome_lista, id]);
//     } catch (err) {
//         console.error(`erro ao tentar editar lista: ${err}`);
//     }

// }

// async function apagarLista(id) {
//     try {
//         const client = await db.connect();
//         const sqlQuery = "delete from listas_compras where id=$1"
//         const request = await client.query(sqlQuery, [id]);
//     } catch (err) {
//         console.error(`erro ao tentar apagar lista: ${err}`);
//     }

// }

module.exports = {
    selecionarListas: selecionarListas,
    selecionarListaById: selecionarListaById,
    criarLista: criarLista,
    editarLista: editarLista,
    apagarLista: apagarLista
}