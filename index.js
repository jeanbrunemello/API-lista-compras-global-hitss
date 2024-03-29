const express = require('express') //ORM
const database = require('./db');


//rotas
//const listasRoutes = require('./src/Routes/listasRoutes')
const rotas = require('./src/Routes/index')


const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const port = 3000;
app.use('/listas', rotas.listas)
// app.use('/login', rotas.login)
app.use('/produtos', rotas.produtos)

app.listen(port, () => {
    console.log(`backend rodando na porta ${port}`)
})




