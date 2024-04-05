const { checkSchema } = require('express-validator');

module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            notEmpty: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Nome precisa de no minimo 2 caracteres'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email Invalido'
        },
        password: {
            optional: true,
            notEmpty: true,
            isLength: {
                options: { min: 4 }
            },
            errorMessage: 'Senha precisa de no minimo 4 caracteres'
        },
        state: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Estado não preenchido'

        }
    })

};