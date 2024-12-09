import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi.string()
    .required()
    .pattern(/^[A-Za-z\d @$!%*?&.]+$/)
    .min(3)
    .max(25)
    .messages({
        'string.pattern.base': 'The name can only contain letters, numbers, spaces, special characters, and dots.',
        'string.min': 'The name must have at least 3 characters.',
        'string.max': 'The name must have a maximum of 25 characters.',
        'string.empty': 'The "name" field cannot be empty.',
        'any.required': 'The "name" field is required.'
    }),
    website: Joi.string()
        .uri()
        .required()
        .messages({
            'string.uri': 'The "website" field must be a valid URL.',
            'string.empty': 'The "website" field cannot be empty.',
            'any.required': 'The "website" field is required.'
        }),
    description: Joi.string()
        .required()
        .pattern(/^[A-Za-z\d @$!%*?&.]+$/)
        .min(8)
        .max(40)
        .messages({
            'string.pattern.base': 'The description can only contain letters, numbers, spaces, special characters, and dots.',
            'string.min': 'The description must have at least 8 characters.',
            'string.max': 'The description must have a maximum of 40 characters.',
            'string.empty': 'The "description" field cannot be empty.',
            'any.required': 'The "description" field is required.'
        }),
    photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Photo URL is invalid'
        }),
    user_id: Joi.string()
        .required()
        .pattern(/^[a-fA-F0-9]{24}$/) // ObjectId validation pattern
        .messages({
            'any.required': 'The "user_id" field is required.',
            'string.pattern.base': 'The "user_id" must be a valid ObjectId.'
        }),
    active: Joi.boolean()
        .optional()
        .messages({
            'boolean.base': 'The "active" field must be a boolean value (true or false).'
        })
});

export default schema;
