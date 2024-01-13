const dotenv = require('dotenv') //lib de gerenciamento de variavel de ambiente
const express = require('express') //ORM
const db = require('./db');

//controllers
const listaController = require('./src/Controllers/listasController')

//rotas
const listasRoutes = require('./src/Routes/listasRoutes')

//const ambiente = dotenv.config()
const port = process.env.PORT;


const app = express();
app.use(express.json());

app.use('/listas', listasRoutes)
// app.use('/login', loginRoutes)
// app.use('/produtos', produtosRoutes)

app.listen(port)
console.log(`backend rodando na porta ${port}`)




