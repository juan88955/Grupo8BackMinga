import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi.string()
        .required()
        .pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\d\s@$!%*?&.,()-]+$/)
        .min(3)
        .max(40)
        .messages({
            'string.pattern.base': 'The name can contain letters, accents, numbers, spaces and basic punctuation.',
            'string.min': 'The name must have at least 3 characters.',
            'string.max': 'The name must have a maximum of 40 characters.',
            'string.empty': 'The "name" field cannot be empty.',
            'any.required': 'The "name" field is required.'
        }),
    website: Joi.string()
        .uri()
        .allow('')
        .messages({
            'string.uri': 'The website must be a valid URL.',
            'string.empty': 'The website field cannot be empty when provided.'
        }),
    description: Joi.string()
        .required()
        .pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\d\s@$!%*?&.,()-]+$/)
        .min(8)
        .max(300)
        .messages({
            'string.pattern.base': 'The description can contain letters, accents, numbers, spaces and basic punctuation.',
            'string.min': 'The description must have at least 8 characters.',
            'string.max': 'The description must have a maximum of 300 characters.',
            'string.empty': 'The "description" field cannot be empty.',
            'any.required': 'The "description" field is required.'
        }),
    photo: Joi.string()
        .uri()
        .allow('')
        .messages({
            'string.uri': 'The photo URL must be valid when provided'
        }),
    user_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'The "user_id" field is required.',
            'string.pattern.base': 'The "user_id" must be a valid ObjectId.'
        }),
    active: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'The "active" field must be true or false'
        })
});

export default schema;