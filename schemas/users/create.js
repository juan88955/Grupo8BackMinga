import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'any.required': 'The "email" field is required.'
        }),
    password: Joi.string()
        .required()
        .min(5)
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .messages({
            'string.min': 'Password must be at least 5 characters',
            'string.pattern.base': 'The password must include at least one letter, one number, and one special character.',
            'any.required': 'The "password" field is required.'
        }),
    photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Photo URL is invalid'
        }),
    role: Joi.number()
        .required()
        .positive()
        .precision(1)
        .messages({
            'number.base': 'The value must be a number',
            'number.positive': 'The value must be positive',
            'number.precision': 'The value can have up to only one number'
        }),
        online: Joi.boolean()
        .optional()
        .messages({
            'boolean.base': 'The "online" field must be a boolean value (true or false).'
        })
});

export default userSchema;
