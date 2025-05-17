import Joi from "joi";

const userScheme = Joi.object({
    nombres: Joi.string().min(3).required(),
    correo: Joi.string().email().required(),
    contrasena: Joi.string().min(3).required(),
    apellidos: Joi.string().min(3).required(),
    dni: Joi.string().min(3).required(),
    celular: Joi.string().min(3).required(),
    habilidades: Joi.array().required(),
    rol: Joi.array().required(),
})
const validatedUser = (req, res, next) => {
    const { error } = userScheme.validate(req.body);
    if (error)
        return res.status(400).json({
            status: 400,
            message: error.details[0].message
        })
    next();
}
export default validatedUser;