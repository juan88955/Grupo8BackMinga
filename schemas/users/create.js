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
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/)
        .messages({
            'string.min': 'Password must be at least 5 characters',
            'string.pattern.base': 'The password must include at least one letter, one number, and one special character.',
            'any.required': 'The "password" field is required.'
        }),
    photo: Joi.string()
        .required()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Photo URL is invalid'
        })
});

export default userSchema;
