const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM portifolio",callback);
    }
    static getId(id, callback){
        return db.query("SELECT * FROM portifolio WHERE id_portifolio = ?",[id], callback)
    }
    static adicionar(portifolio, callback){
        return db.query("INSERT INTO portifolio(descricao, detalhes) VALUES(?,?)",
        [portifolio.descricao,portifolio.detalhes], callback);
    }
    static deletar(id,callback){
        return db.query("DELETE FROM portifolio WHERE id_portifolio = ?", [id], callback)
    }
    static editar(portifolio ,callback){
        return db.query("UPDATE portifolio SET descricao = ?, detalhes = ? WHERE id_portifolio = ?", 
        [portifolio.descricao, portifolio.detalhes, portifolio.id_portifolio], callback)
    }
};
