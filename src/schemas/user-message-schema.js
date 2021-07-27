const Joi = require('joi');

const schema = Joi.object({
    user_message: Joi.string()
        .required()
})

module.exports = schema;