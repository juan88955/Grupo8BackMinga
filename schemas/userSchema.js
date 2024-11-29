import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'El nombre debe tener al menos 2 caracteres',
            'string.max': 'El nombre no puede tener más de 50 caracteres',
            'any.required': 'El nombre es obligatorio'
        }),
    lastName: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'El apellido debe tener al menos 2 caracteres',
            'string.max': 'El apellido no puede tener más de 50 caracteres',
            'any.required': 'El apellido es obligatorio'
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Formato de email inválido',
            'any.required': 'El email es obligatorio'
        }),
    password: Joi.string()
        .min(5)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .required()
        .messages({
            'string.min': 'La contraseña debe tener al menos 5 caracteres',
            'string.pattern.base': 'La contraseña debe contener al menos una mayúscula, una minúscula y un número',
            'any.required': 'La contraseña es obligatoria'
        }),
    country: Joi.string()
        .default('Mexico')
        .messages({
            'any.required': 'El país es obligatorio'
        }),
    photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'La URL de la foto no es válida'
        }),
    address: Joi.string()
        .min(5)
        .max(100)
        .required()
        .messages({
            'string.min': 'La dirección debe tener al menos 5 caracteres',
            'string.max': 'La dirección no puede tener más de 100 caracteres',
            'any.required': 'La dirección es obligatoria'
        }),
    userType: Joi.string()
        .valid('user', 'admin')
        .required()
        .messages({
            'any.only': 'El tipo de usuario debe ser "user" o "admin"',
            'any.required': 'El tipo de usuario es obligatorio'
        }),
    birthDate: Joi.date()
        .iso()
        .required()
        .messages({
            'date.base': 'La fecha de nacimiento debe ser una fecha válida',
            'any.required': 'La fecha de nacimiento es obligatoria'
        }),
    savedMangas: Joi.array()
        .items(Joi.string().pattern(/^[a-f\d]{24}$/i))
        .messages({
            'array.base': 'Los mangas guardados deben ser un arreglo de IDs válidos',
            'string.pattern.base': 'Cada ID de manga debe ser un ObjectId válido'
        })
});

export default userSchema;
