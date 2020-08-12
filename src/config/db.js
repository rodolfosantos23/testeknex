const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        database: 'nossaescola',
        user: 'root',
        password: '060262'
    },
});

module.exports = db;