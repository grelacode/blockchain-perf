const Joi = require('joi');

const { UNPROCESSABLE_ENTITY } = require('../constants/http-codes');

const userMessageValidator = (userMessageSchema) => {

    return (req, res, next) => {
        const userMessage = req.body;
        const { error } = userMessageSchema.validate( userMessage );
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            res.status(UNPROCESSABLE_ENTITY).json({ error: message })}
    }
}

module.exports = userMessageValidator;
