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
        //El usuario autenticado esta en req.user, no en res.user        
        return res.status(200).json({
            success: true,
            response: req.user
        });
    } catch (error) {
        next(error);
    }
};



export { allUser, usersById, usersByEmail, usersByRole, usersOnline, userValidate }

















































// import User from '../../models/User.js'

// const allUser = async (req, res) => {
//     try {
//         let users = await User.find()
//         res.status(200).json({
//             success: true,
//             users: users
//         })
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// const userById = async (req, res) => {
//     try {
//         let user = await User.findById(req.params.id)
//         res.status(200).json({
//             success: true,
//             user: user
//         })
//     } catch (error) {
//         next(error)
//     }
// }
// export { allUser, userById }