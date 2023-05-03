const Database = require('./database');
const Pessoa = require('../model/pessoa');

class PessoaDAO extends Database {
    constructor(config) {
        super(config);
    }

    insert(pessoa, callback) {
        const sql = `
        INSERT INTO pessoa (id, nome, sobrenome)
        VALUES (null, '${pessoa.nome}', '${pessoa.sobrenome}') `;
        this.query(sql, callback);
    }

    getAll(callback) {
        const sql = 'SELECT id, nome, sobrenome FROM pessoa';

        this.query(sql, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                let pessoaResult = [];
                const pessoas = result.map((row) => pessoaResult.push(row));
                callback(null, pessoaResult);
            }
        });
    }
}

module.exports = PessoaDAO;