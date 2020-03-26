const express = require('express');
const routes = require('./routes'); //como é arquivo, usa-se ./ (caminho)
const cors = require('cors');

const app = express(); //aplicação
app.use(cors()); //posso enviar dentro de cors qual endereço vai acessar minha aplicação com ORIGIN, por padrão todas liberadas

app.use(express.json()); //tornar objeto entendivel pelo javascript
app.use(routes); //para utilizar as rotas criadas


app.listen(3333); //ouvindo requisições