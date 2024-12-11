import Joi from "joi";

const schema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'any.required': 'The "email" field is required.'
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[A-Za-zÁáÉéÍíÓóÚúÑñ])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zÁáÉéÍíÓóÚúÑñ\d@$!%*?&]*$/)
        .messages({
            'string.min': 'Password must be at least 8 characters',
            'string.max': 'Password must not exceed 30 characters',
            'string.pattern.base': 'The password must include at least one letter, one number, and one special character.',
            'any.required': 'The "password" field is required.'
        }),
    photo: Joi.string()
        .uri()
        .allow('')
        .messages({
            'string.uri': 'Photo URL is invalid'
        }),
    role: Joi.number()
        .default(0)
        .min(0)
        .messages({
            'number.base': 'Role must be a number',
            'number.min': 'Role cannot be negative'
        })
});

export default schema;