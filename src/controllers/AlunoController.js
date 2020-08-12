const Alunos = require('../models/Alunos');

module.exports = {

    async index(req, res) {
        const aluno = await Alunos.query()
            .select('pessoa.id', 'alumatricula', 'ra', 'pessoa.nome', 'pessoa.data_nascimento', 'pessoa.email', 'pessoa.cpf')
            .joinRelated('pessoa');
        res.json(aluno);
    },

    async view(req, res) {
        const aluno = await Alunos.query().findById(req.params.alumatricula);
        res.json(aluno);
    },

};