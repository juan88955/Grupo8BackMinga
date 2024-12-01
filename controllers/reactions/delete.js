import Reaction from '../../models/Reaction.js'

const deleteReaction = async (req, res) => {
    try {
        await Reaction.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Reaction deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteReaction