const { Model } = require('objection')
const db = require('../config/db')
const Pessoa = require('../models/Pessoa')

Model.knex(db)

/**
 * Aluno Model
 */
class Alunos extends Model {

    // Nome da tabela
    static get tableName() {
        return 'alunos'
    }

    // Primary Key
    static get idColumn() {
        return 'alumatricula'
    }

    // Esquema da tabela
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['alumatricula', 'pessoa_id'],
            properties: {
                pessoa_id: { type: 'integer' },
                alumatricula: { type: 'string', minLength: 1, maxLength: 50 },
                ra: { type: 'string', minLength: 1, maxLength: 50 }
            },
        }
    }

    // Relations
    static relationMappings = {
        pessoa: {
            relation: Model.HasManyRelation,
            modelClass: Pessoa,
            join: { from: 'alunos.pessoa_id', to: 'new_pessoa.id' }
        }
    }

}

module.exports = Alunos