import User from "../../models/User.js"

let allUser = async (req, res, next) => {
    try {
        let { name } = req.query
        let query = {} //Enviamos un objeto vacio, para traer a todos los usuarios

        if (name) {
            query.name = { $regex: name, $options: 'i' } //Prevalidaciones
        }

        let user = await User.find(query);
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

let usersById = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let user = await User.findById(idQuery);
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

let usersByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;
        let user = await User.find({ name: nameQuery });
        return res.status(200).json({
            response: user
        });
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



export { allUser, usersById, usersByName, usersByRole, usersOnline }

















































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