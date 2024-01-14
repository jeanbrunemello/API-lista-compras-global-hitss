const express = require('express') //ORM
const database = require('./db');


//rotas
//const listasRoutes = require('./src/Routes/listasRoutes')
const rotas = require('./src/Routes/index')


const app = express();
app.use(express.json());

const port = 3000;
app.use('/listas', rotas.listas)
// app.use('/login', loginRoutes)
// app.use('/produtos', produtosRoutes)

app.listen(port, () => {
    console.log(`backend rodando na porta ${port}`)
})




