import Joi from "joi-oid";

const schema = Joi.object({
    chapter_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'Chapter ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),
    author_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'Author ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),
    company_id: Joi.objectId()
        .required()
        .messages({
            'any.required': 'Company ID is required',
            'string.pattern.name': 'The ID must be a valid ObjectId'
        }),
    message: Joi.string()
        .required()
        .pattern(/^[A-Za-z\d @$!%*?&.]+$/)
        .max(40)
        .messages({
            'string.pattern.base': 'The message can only contain letters, numbers, spaces, special characters, and dots.',
            'string.min': 'The message must have at least 8 characters.',
            'string.max': 'The message must have a maximum of 40 characters.',
            'string.empty': 'The "message" field cannot be empty.',
            'any.required': 'The "message" field is required.'
        })
});

export default schema;