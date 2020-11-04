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
});
router.get("/:id?",function(req,res,next){
    PortifolioModel.getId(req.params.id,function(erro,retorno){
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

router.post("/?",function(req,res,next){
    PortifolioModel.adicionar(req.body,function(erro,retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('Erro: ', erro);
        }
        else{
            if(retorno.affectedRows > 0){
                resposta.msg = "cadastro realizado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possivel realizar a operação'
            }
        }
        console.log('resp: ', resposta);
        res.json(resposta);
    })
})

router.delete("/:id",function(req,res,next){
    PortifolioModel.deletar(req.params.id,function(erro,retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('Erro: ', erro);
        }
        else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro excluido com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possivel excluir o registro'
            }
        }
        console.log('resp: ', resposta);
        res.json(resposta);
    })
})
router.put("/",function(req,res,next){
    PortifolioModel.editar(req.body,function(erro,retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('Erro: ', erro);
        }
        else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro editado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possivel editar o registro'
            }
        }
        console.log('resp: ', resposta);
        res.json(resposta);
    })
})
module.exports = router;