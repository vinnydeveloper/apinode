const {User} = require('../models');

exports.get = (req,res,next) => {
     res.status(201)
     User.findAll().then(users => res.json(users))
}
exports.post = (req, res, next) => {

    const {
        nome,
        email,
        rg,
        cpf,
        password,
        dataNascimento,
        sexo,
        telefone,
        plano
    } = req.body;
    User.create({
        name: nome,
        email: email,
        rg: rg,
        cpf: cpf,
        dataNascimento: dataNascimento,
        sexo: sexo,
        telefone: telefone,
        plano: plano,
        password: password
    })
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};