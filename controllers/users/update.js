import User from "../../models/User.js"

const update = async (req, res, next) => { //Reciubimos los 3 parametros basicos
    try {
        let user = req.body
        await User.updateOne( //Este método busca el primer documento que cumple ciertas condiciones y lo modifica. Por defecto, no devuelve el documento modificado.
            //Recibe 2 objetos
            { _id: user._id }, //condiciones de busqueda una o varias. (ej: _id: user._id, name: user.name)
            { firstname: user.firstname, lastname: user.lastname, email: user.email, password: user.password, photo: user.photo, country: user.country } //modificaciones
        )
        return res.status(200).json({
            responde: user
        })

    } catch (error) {
        next(error)
    }
}

export default update