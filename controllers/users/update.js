import User from '../../models/User.js'

const update = async (req, res) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            user: updatedUser
        })
    } catch (error) {
        next(error)
    }
}

export default update