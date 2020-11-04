const { query } = require('express');
var express = require('express');
var router = express.Router();
var PortifolioModel = require('../model/portifolio/PortifolioModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/",function(req,res,next){
    PortifolioModel.getTodos(function(erro,retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('Erro: ', erro);
        }
        else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})

module.exports = router;