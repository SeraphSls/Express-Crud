var dbConn = require('../config/db.config');


var Aluno = function (aluno) {
    this.first_name = aluno.first_name;
    this.last_name = aluno.last_name;
    this.email = aluno.email;
    this.phone = aluno.phone;
};


Aluno.create = function (novoAluno, result) {
    dbConn.query("INSERT INTO alunos SET first_name=?,last_name=?,email=?,phone=?", [novoAluno.first_name, novoAluno.last_name, novoAluno.email, novoAluno.phone], function (err, res) {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


Aluno.findById = function (id, result) {
    dbConn.query("Select * from alunos where id = ? ", id, function (err, res) {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


Aluno.findAll = function (result) {
    dbConn.query("Select * from alunos", function (err, res) {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
        } else {
            console.log('alunos : ', res);
            result(null, res);
        }
    });
};

Aluno.update = function (id, employee, result) {
    dbConn.query("UPDATE alunos SET first_name=?,last_name=?,email=?,phone=?, WHERE id = ?", [Aluno.first_name, Aluno.last_name, Aluno.email, employee.phone, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


Aluno.delete = function (id, result) {
    dbConn.query("DELETE FROM alunos WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Aluno;