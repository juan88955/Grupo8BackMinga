import User from "../../models/User.js"

const allUser = async (req, res) => {
    try {
        let users = await User.find()
        res.status(200).json({
            success: true,
            users: users
        })
    } catch (error) {
        next(error);
    }
};

let usersById = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let user = await User.findById(idQuery).populate
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

let usersByEmail = async (req, res, next) => {
    try {
        let emailQuery = req.params.email;
        if (emailQuery) {
            let regex = new RegExp(emailQuery, 'i');
            let user = await User.find({ email: regex });
            return res.status(200).json({
                response: user
            });
        } else {
            return res.status(400).json({
                message: "El parámetro 'name' es requerido."
            });
        }
    } catch (error) {
        next(error);
    }
};

let usersByRole = async (req, res, next) => {
    try {
        let nameQuery = req.params.role;
        let user = await User.find({ role: nameQuery });
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

let usersOnline = async (req, res, next) => {
    try {
        let userQuery = req.params.online;
        let city = await User.find({ online: userQuery });
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

let userValidate = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            response: req.user
        });
    } catch (error) {
        next(error);
    }
};



export { allUser, usersById, usersByEmail, usersByRole, usersOnline, userValidate }