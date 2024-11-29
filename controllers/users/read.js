import User from '../../models/User.js'

const allUser = async (req, res) => {
    try {
        let users = await User.find()
        res.status(200).json({
            success: true,
            users: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const userById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        res.status(200).json({
            success: true,
            user: user
        })
    } catch (error) {
        next(error)
    }
}
export { allUser, userById }