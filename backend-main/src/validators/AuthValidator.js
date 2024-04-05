const { checkSchema } = require('express-validator');

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            notEmpty: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Nome precisa de no minimo 2 caracteres'
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email Invalido'
        },
        password: {
            notEmpty: true,
            isLength: {
                options: { min: 4 }
            },
            errorMessage: 'Senha precisa de no minimo 4 caracteres'
        },
        state: {
            notEmpty: true,
            errorMessage: 'Estado não preenchido'

        }
    }),
    signin: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email Invalido'
        },
        password: {
            notEmpty: true,
            isLength: {
                options: { min: 4 }
            },
            errorMessage: 'Senha precisa de no minimo 4 caracteres'
        },
    })
};