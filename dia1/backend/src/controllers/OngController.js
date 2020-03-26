const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async list(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        //agora efetivamente cadastra no BD
        await connection('ongs').insert({ //aguardar para continuar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });


        return response.json({
            id
        });
    }
};