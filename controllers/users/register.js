import User from '../../models/User.js'

const register = async (req, res, next) => {
    try {
        let newUser = await User.create(req.body)
        res.status(201).json({
            success: true,
            user: newUser
        })
    } catch (error) {
        next(error)
    }
}

export default register