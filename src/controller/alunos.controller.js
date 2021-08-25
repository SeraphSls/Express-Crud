'use strict';
const Aluno = require('../model/alunos.model');


exports.findAll = function (req, res) {
    Aluno.findAll(function (err, Aluno) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', Aluno);
        res.send(Aluno);
    });
};

exports.create = function (req, res) {
    const novo_aluno = new Aluno(req.body);
    //Lida com corpo da requisição nula
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Preencha todos os campos!'
        });
    } else {
        Aluno.create(novo_aluno, function (err, Aluno) {
            if (err)
                res.send(err);
            res.json({
                error: false,
                message: "Aluno adicionado com sucesso!",
                data: Aluno
            });
        });
    }
};

exports.findById = function (req, res) {
    Aluno.findById(req.params.id, function (err, Aluno) {
        if (err)
            res.send(err);
        res.json(Aluno);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Preencha todos os campos!'
        });
    } else {
        Aluno.update(req.params.id, new Aluno(req.body), function (err, Aluno) {
            if (err)
                res.send(err);
            res.json({
                error: false,
                message: 'Aluno atualizado com sucesso!'
            });
        });
    }
};

exports.delete = function (req, res) {
    Aluno.delete(req.params.id, function (err, Aluno) {
        if (err)
            res.send(err);
        res.json({
            error: false,
            message: 'Aluno apagado com sucesso'
        });
    });
};