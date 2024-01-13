const { Pool } = require('pg');
const env = require('dotenv').config();

async function connect() {
    try {


        if (global.connection) return global.connection.connect();

        const pool = new Pool({
            connectionString: process.env.CONNECTION_STRING
        });

        const client = await pool.connect();

        const testeConexao = await client.query('select now()')

        console.log(`Conexão com o banco iniciado em ${testeConexao.rows[0].now}`)

        client.release();

        global.conection = pool;
        return pool.connect();

    } catch (erro) {
        console.error(`Erro ao conectar ao banco de dados: ${erro}`);
    }
}

connect();

async function select() {
    const client = await connect();
    const request = await client.query("select * from listas_compras");
    return request.rows;
}

async function selectId(id) {
    const client = await connect();
    const request = await client.query("SELECT * FROM listas_compras where id=$1;", [id]);
    return request.rows;
}

async function post(lista) {
    try {
        const client = await connect();
        const sqlQuery = "insert into listas_compras(nome_lista) values ($1)"
        const request = await client.query(sqlQuery, [lista.nome_lista]);
    } catch (err) {
        console.error(`erro ao tentar cadastrar lista: ${err}`);
    }
}

async function edit(id, lista) {
    try {
        const client = await connect();
        const sqlQuery = "update listas_compras set nome_lista=$1 where id=$2"
        const request = await client.query(sqlQuery, [lista.nome_lista, id]);
    } catch (err) {
        console.error(`erro ao tentar editar lista: ${err}`);
    }

}

async function deleta(id) {
    try {
        const client = await connect();
        const sqlQuery = "delete from listas_compras where id=$1"
        const request = await client.query(sqlQuery, [id]);
    } catch (err) {
        console.error(`erro ao tentar apagar lista: ${err}`);
    }

}

module.exports = {
    select,
    selectId,
    post,
    edit,
    deleta
}