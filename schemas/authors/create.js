import Joi from "joi";

const schema = Joi.object({
    name: Joi.string()
        .required()
        .pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/)
        .min(2)
        .max(30)
        .messages({
            'string.pattern.base': 'The name can contain letters, accents and spaces.',
            'string.min': 'The name must have at least 2 characters.',
            'string.max': 'The name must have a maximum of 30 characters.',
            'string.empty': 'The "name" field cannot be empty.',
            'any.required': 'The "name" field is required.'
        }),
    last_name: Joi.string()
        .pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s-]+$/)
        .min(2)
        .max(30)
        .allow('')
        .messages({
            'string.pattern.base': 'The last name can contain letters, accents, spaces and hyphens.',
            'string.min': 'The last name must have at least 2 characters.',
            'string.max': 'The last name must have a maximum of 30 characters.'
        }),
    city: Joi.string()
        .required()
        .pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s.,'-]+$/)
        .min(2)
        .max(50)
        .messages({
            'string.pattern.base': 'The city can contain letters, accents and basic punctuation.',
            'string.min': 'The city must have at least 2 characters.',
            'string.max': 'The city must have a maximum of 50 characters.',
            'any.required': 'The "city" field is required.'
        }),
    country: Joi.string()
        .required()
        .pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s.,'-]+$/)
        .min(2)
        .max(50)
        .messages({
            'string.pattern.base': 'The country can contain letters, accents and basic punctuation.',
            'string.min': 'The country must have at least 2 characters.',
            'string.max': 'The country must have a maximum of 50 characters.',
            'any.required': 'The "country" field is required.'
        }),
    date: Joi.date()
        .max('now')
        .allow('')
        .messages({
            'date.base': 'Please provide a valid date.',
            'date.max': 'The date cannot be in the future.'
        }),
    photo: Joi.string()
        .uri()
        .allow('')
        .messages({
            'string.uri': 'The photo URL must be valid when provided.'
        }),
    user_id: Joi.string()
        .required()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .messages({
            'any.required': 'The "user_id" field is required.',
            'string.pattern.base': 'Please provide a valid user ID.'
        }),
    active: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'The active field must be true or false.'
        })
});

export default schema;