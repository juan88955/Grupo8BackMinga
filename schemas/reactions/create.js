import Joi from "joi-oid";

const Schema = Joi.object({
    manga_id: Joi.objectId().messages({
        'any.required': 'The ID is required',
        'string.pattern.name': 'The ID must be a valid ObjectId'
    }),
    author_id: Joi
        .objectId()
        .messages({
            'any.required': 'The ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),
    company_id: Joi.objectId().messages({
        'any.required': 'The ID is required',
        'string.pattern.name': 'The ID must be a valid ObjectId'
    }),
    reaccion: Joi.string()
        .required()
        .min(3)
        .max(15)
        .messages({
            'string.min': 'The reaccion must have at least 3 characters.',
            'string.max': 'The reaccion must have a maximum of 15 characters.',
            'string.empty': 'The "reaccion" field cannot be empty.',
            'any.required': 'The "reaccion" field is required.'
        })
});

export default Schema;