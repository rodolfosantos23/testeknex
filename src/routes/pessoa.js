const PessoaController = require('../controllers/PessoaController');

module.exports = function (app) {

    // Index
    app.get("/pessoa", PessoaController.index);

    // View
    app.get("/pessoa/:id", PessoaController.view);

};


