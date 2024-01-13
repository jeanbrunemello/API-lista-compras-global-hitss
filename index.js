const express = require('express') //ORM
const database = require('./db');

//controllers
const listaController = require('./src/Controllers/listasController')

//rotas
const listasRoutes = require('./src/Routes/listasRoutes')


const app = express();
app.use(express.json());

const port = 3000;
app.use('/listas', listasRoutes)
// app.use('/login', loginRoutes)
// app.use('/produtos', produtosRoutes)

app.listen(port, () => {
    console.log(`backend rodando na porta ${port}`)
})




