import Joi from "joi-oid";

const userSchema = Joi.object({
    author_id: Joi
        .objectId()
        .messages({
            'any.required': 'The ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),
    company_id: Joi
        .objectId()
        .messages({
            'any.required': 'The ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),
    title: Joi
        .string()
        .required()
        .pattern(/^[A-Za-z\d @$!%*?&.]+$/) // Allows letters, numbers, spaces, special characters, and dots
        .min(3)
        .max(40)
        .messages({
            'string.pattern.base': 'The title can only contain letters, numbers, spaces, special characters, and dots.',
            'string.min': 'The title must have at least 3 characters.',
            'string.max': 'The title must have a maximum of 40 characters.',
            'string.empty': 'The "title" field cannot be empty.',
            'any.required': 'The "title" field is required.'
        }),
    cover_photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Photo URL is invalid'
        }),
    description: Joi.string()
        .required()
        .min(8)
        .max(400)
        .messages({
            'string.min': 'The description must have at least 8 characters.',
            'string.max': 'The description must have a maximum of 400 characters.',
            'string.empty': 'The "description" field cannot be empty.',
            'any.required': 'The "description" field is required.'
        }),
    category_id: Joi.objectId().messages({
        'any.required': 'The ID is required',
        'string.pattern.name': 'The ID must be a valid ObjectId'
    })
});

export default userSchema;
