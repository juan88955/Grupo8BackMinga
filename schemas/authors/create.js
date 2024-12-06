import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string()
        .required()
        .pattern(/^[a-zA-Z\s]+$/) // Only letters and spaces
        .min(3)
        .max(16)
        .messages({
            'string.pattern.base': 'The name can only contain letters and spaces.',
            'string.min': 'The name must have at least 3 characters.',
            'string.max': 'The name must have a maximum of 16 characters.',
            'string.empty': 'The "name" field cannot be empty.',
            'any.required': 'The "name" field is required.'
        }),
    last_name: Joi.string()
        .required()
        .pattern(/^[a-zA-Z\s]+$/) // Only letters and spaces
        .min(3)
        .max(16)
        .messages({
            'string.pattern.base': 'The last name can only contain letters and spaces.',
            'string.min': 'The last name must have at least 3 characters.',
            'string.max': 'The last name must have a maximum of 16 characters.',
            'string.empty': 'The "last_name" field cannot be empty.',
            'any.required': 'The "last_name" field is required.'
        }),
    city: Joi.string()
        .required()
        .min(3)
        .max(20)
        .messages({
            'string.base': 'The "city" field must be a string.',
            'string.empty': 'The "city" field cannot be empty.',
            'string.min': 'The city name must have at least 3 characters.',
            'string.max': 'The city name must have a maximum of 20 characters.',
            'any.required': 'The "city" field is required.'
        }),
    country: Joi.string()
        .required()
        .min(3)
        .max(20)
        .messages({
            'string.base': 'The "country" field must be a string.',
            'string.empty': 'The "country" field cannot be empty.',
            'string.min': 'The country name must have at least 3 characters.',
            'string.max': 'The country name must have a maximum of 20 characters.',
            'any.required': 'The "country" field is required.'
        }),
    // date: Joi.date()
    //     .required()
    //     .less('now')
    //     .messages({
    //         'date.base': 'The "date" field must be a valid date.',
    //         'date.less': 'The "date" must be in the past.',
    //         'any.required': 'The "date" field is required.'
    //     }),
    photo: Joi.string()
        .uri()
        .required()
        .messages({
            'string.uri': 'The "photo" field must be a valid URL.',
            'string.empty': 'The "photo" field cannot be empty.',
            'any.required': 'The "photo" field is required.'
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

export default userSchema;
