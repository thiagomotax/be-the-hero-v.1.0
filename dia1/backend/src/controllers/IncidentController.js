const connection = require('../database/connection');

module.exports = {

    async list(request, response) {

        const [count] = await connection('incidents').count(); //[] para pegar a primeira posição do array
        console.log(count);

        //paginação http://localhost:3333/incidents/?page=2
        const {
            page = 1
        } = request.query;

        const incidents = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        //retornar quantidade de itens pelo cabeçalho da respostas
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);


    },

    async delete(request, response) {
        const {
            id
        } = request.params;
        const ong_id = request.headers.authorization;

        //se o id do incidente não pertencer ao ong_id, não deixar excluir
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (ong_id != incident.ong_id) {
            return response.status(401).json({
                error: 'Permission denied'
            });
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send(204); //deu sucesso sem conteudo pra retornar, vazia
    },

    async create(request, response) {
        const {
            //o id é incremental e automático
            title,
            description,
            value,
        } = request.body;

        //request.headers //dados da autenticação do usuário (login)
        const ong_id = request.headers.authorization;

        //agora efetivamente cadastra no BD
        const idInserido = await connection('incidents').insert({ //aguardar para continuar
            title,
            description,
            value,
            ong_id,
        });
        const idReal = idInserido[0]; //so tem uma posicao pq só insere 1

        return response.json({
            idReal
        });
    }
};