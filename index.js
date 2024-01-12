const dotenv = require('dotenv') //lib de gerenciamento de variavel de ambiente
const express = require('express') //ORM
const db = require('./db')

const ambiente = dotenv.config()
const port = process.env.PORT;

const app = express();

app.get('/', (request, response) =>{
    response.json({ message: 'bateu'})
})

app.listen(port)
console.log(`backend rodando na porta ${port}`)

