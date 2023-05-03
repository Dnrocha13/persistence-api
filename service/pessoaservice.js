const PessoaDAO = require('../persistence/pessoadao');
const Pessoa = require('../model/pessoa');

class PessoaService {
    constructor(config) {
        this.pessoaDAO = new PessoaDAO(config);
    }

    criarPessoa(pessoa, callback) {
        const novaPessoa = new Pessoa(pessoa.nome,  pessoa.sobrenome);
        this.pessoaDAO.insert(novaPessoa, callback);
    }

    buscarTodasAsPessoas(callback) {
        this.pessoaDAO.getAll(callback);
    }
}

module.exports = PessoaService;
