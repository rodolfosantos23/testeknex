const {Model} = require('objection');
const db = require('../config/db');

Model.knex(db);

/**
 * Pessoa Model
 */
class Pessoa extends Model {

    /**
     * Nome da tabela
     * @returns {string}
     */
    static get tableName() {
        return 'new_pessoa';
    }

    /**
     * Get ID
     * @returns {string}
     */
    static get idColumn() {
        return 'id';
    }

    /**
     * Esquema da tabela, pode ser configurado os campos, relations, etc
     * @returns Object
     */
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nome', 'cpf', 'data_nascimento'],
            properties: {
                id: {type: 'integer'},
                nome: {type: 'string', minLength: 1, maxLength: 255},
                cpf: {type: 'string', minLength: 1, maxLength: 14}
            }
        };
    }

}

module.exports = Pessoa;