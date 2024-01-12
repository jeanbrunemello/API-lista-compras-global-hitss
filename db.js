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