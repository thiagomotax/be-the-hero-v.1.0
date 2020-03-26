const knex = require('knex');
const configuration = require('../../knexfile');


const connection = knex(configuration.development); //por padrao a conexão de desenvolvimento

module.exports = connection; //exportar conexão para onde for necessário utilizá-la