import Joi from "joi-oid";

const schema = Joi.object({
    manga_id: Joi.objectId().messages({
        'any.required': 'The ID is required',
        'string.pattern.name': 'The ID must be a valid ObjectId'
    }),
    title: Joi.string()
        .required()
        .min(3)
        .max(40)
        .messages({
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
    pages: Joi.array()
        .items(Joi.string().uri().messages({
            'string.uri': 'Each page must be a valid URL.'
        }))
        .required()
        .messages({
            'array.base': 'The "pages" field must be an array.',
            'any.required': 'The "pages" field is required.',
            'array.includes': 'The "pages" array must contain only valid image URLs.'
        }),
    order: Joi.number()
        .required()
        .positive()
        .precision(1)
        .messages({
            'number.base': 'The value must be a number',
            'number.positive': 'The value must be positive',
            'number.precision': 'The value can have up to only one number'
        }),

});

export default schema;