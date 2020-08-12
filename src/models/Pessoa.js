const { Model } = require('objection')
const db = require('../config/db')

Model.knex(db)

/**
 * Pessoa Model
 */
class Pessoa extends Model {

    // Nome da tabela
    static get tableName() {
        return 'new_pessoa'
    }

    // Primary Key
    static get idColumn() {
        return 'id'
    }

    // Esquema da tabela
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nome', 'cpf', 'data_nascimento'],
            properties: {
                id: { type: 'integer' },
                nome: { type: 'string', minLength: 1, maxLength: 255 },
                cpf: { type: 'string', minLength: 1, maxLength: 14 }
            }
        }
    }

}

module.exports = Pessoa