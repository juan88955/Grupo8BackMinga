import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi.string()
        .required()
        .pattern(/^[a-zA-Z\s]+$/)
        .min(3)
        .max(16)
        .messages({
            'string.pattern.base': 'The name can only contain letters and spaces.',
            'string.min': 'The name must have at least 3 characters.',
            'string.max': 'The name must have a maximum of 16 characters.',
            'string.empty': 'The "name" field cannot be empty.',
            'any.required': 'The "name" field is required.'
        }),
    color: Joi.string()
        .required()
        .pattern(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$|^[a-zA-Z\s]+$/)
        .messages({
            'string.pattern.base': 'The color must be a valid hex code (e.g., #FFF or #FFFFFF) or a valid text format.',
            'any.required': 'The "color" field is required.',
            'string.empty': 'The "color" field cannot be empty.'
        }),
    hover: Joi.string()
        .required()
        .pattern(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$|^[a-zA-Z\s]+$/)
        .messages({
            'string.pattern.base': 'The hover must be a valid hex code (e.g., #FFF or #FFFFFF) or a valid text format.',
            'any.required': 'The "hover" field is required.',
            'string.empty': 'The "hover" field cannot be empty.'
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
    cover_photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Photo URL is invalid'
        }),
    character_photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Photo URL is invalid'
        }),
    admin_id: Joi
        .objectId()
        .messages({
            'any.required': 'The ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),

});

export default schema;
