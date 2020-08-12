const AlunoController = require('../controllers/AlunoController');

module.exports = function (app) {

    // Index
    app.get("/aluno", AlunoController.index);

    // View
    app.get("/aluno/:alumatricula", AlunoController.view);

};


