const dotenv = require('dotenv') //lib de gerenciamento de variavel de ambiente
const express = require('express') //ORM
const db = require('./db')

const ambiente = dotenv.config()
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.json({ message: 'bateu' })
})

app.get('/listas/:id', async (request, response) => {
    const lista = await db.selectId(request.params.id);
    response.json(lista)
})

app.get('/listas', async (request, response) => {
    const listas = await db.select();
    response.json(listas)
})

app.post('/listas', async (request, response) => {
    console.log(request.body)
    try {
        const listas = await db.post(request.body);
        response.sendStatus(201);
    } catch (err) {
        console.error(err)
    }

})

app.patch('/listas/:id', async (request, response) => {
    try {
        const listas = await db.edit(request.params.id, request.body);
        response.sendStatus(200);
    } catch (err) {
        console.error(err)
    }

})

app.delete('/listas/:id', async (request, response) => {
    try {
        const listas = await db.deleta(request.params.id);
        response.sendStatus(204);
    } catch (err) {
        console.error(err)
    }

})



app.listen(port)
console.log(`backend rodando na porta ${port}`)

