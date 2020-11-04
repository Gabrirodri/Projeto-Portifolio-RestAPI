const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM portifolio",callback);
    }
};
