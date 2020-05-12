const Pessoa = require('../models/Pessoa');

module.exports = {


    async index(req, res) {
        const pessoa = await Pessoa.query().select('id', 'nome', 'cpf', 'data_nascimento', 'email');
        res.json(pessoa);
    },

    async view(req, res) {
        const pessoa = await Pessoa.query().findById(req.params.id);
        res.json(pessoa);
    },

};