const express = require('express');

const app = express(); //aplicação

app.get('/', (request, response) => {
    return response.send('Hello world');
});

app.get('/contato', (request, response) => {
    return response.json({
        titulo: "semana oministack",
        descricao: "descrição teste"
    })
});

app.listen(3333); //ouvindo requisições