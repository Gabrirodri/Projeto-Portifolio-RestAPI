const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM portifolio",callback);
    }
    static getId(id, callback){
        return db.query("SELECT * FROM portifolio WHERE id_portifolio = ?",[id], callback)
    }
};
