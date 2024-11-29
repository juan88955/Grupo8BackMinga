import User from '../../models/User.js'

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteUser