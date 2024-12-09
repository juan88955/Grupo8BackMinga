import Joi from "joi-oid";

const schema = Joi.object({
    creator_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'Creator ID is required',
            'string.pattern.name': 'Creator ID must be a valid ObjectId'
        }),
    creator_type: Joi.string()
        .valid('Author', 'Company')
        .required()
        .messages({
            'any.required': 'Creator type is required',
            'any.only': 'Creator type must be either Author or Company'
        }),
    title: Joi.string()
        .required()
        .pattern(/^[A-Za-z\d @$!%*?&.]+$/)
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
        .required()
        .uri()
        .messages({
            'any.required': 'Cover photo is required',
            'string.uri': 'Cover photo URL is invalid'
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
    category_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'Category ID is required',
            'string.pattern.name': 'Category ID must be a valid ObjectId'
        })
});

export default schema;