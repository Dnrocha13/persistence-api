const mysql = require('mysql');

class MySQLDatabase {
    constructor(config) {
        this.connection = mysql.createConnection(config);
        this.connection.connect((error) => {
            if (error){
                console.error('Erro ao conectar ao banco de dados',error);
            } else {
                console.log('Conectado ao banco de dados');
            }    
        });
 }

    query(sql, callback) {
        this.connection.query(sql, (error, result) => {
            if (error){
                console.error('Erro na execução da Query', error);
                callback(error, null);
            }  else {
                console.log('Query executada com sucesso');
                callback(null, result);
            }
        });
    }

    close() {
        this.connection.end();
    }
}

module.exports = MySQLDatabase;