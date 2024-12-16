const Joi = require('joi')

const cardSchema = Joi.object({
    tag: Joi.string().min(2).lowercase().required(),
    question: Joi.string().min(5).required()
})
module.exports = {
    cardSchema
}  