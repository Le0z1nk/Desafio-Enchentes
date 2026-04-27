const Joi = require('joi')
const usuarioSchema = Joi.object({
     nome: Joi.string().min(3).required().messages({
        "string.empty": "Nome é obrigatório",
        "string.min": "Nome deve ter pelo menos 3 caracteres",
        "any.require": "Nome é obrigatório"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email é obrigatório",
        "string.email": "Email deve ser um email valido",
        "any.require": "Email é obrigatório"
    }),
    senha: Joi.string().min(5).required().messages({
        "string.base": "Senha deve ser string",
        "string.empty": "Senha é obrigatório",
        "string.min": "Senha deve ter 5 caracteres",
        "any.require": "Senha é obrigatório"
    })
})

function validarUsuarios(req, res, next) {
    const {error} = usuarioSchema.validate(req.body, {abortEarly:
        false
    })

    if (error) {
        return res.status(400).json({
            erro: error.details.map(e => e.message)
        })
    }
    next()
}
module.exports = validarUsuarios