import Reaction from '../../models/Reaction.js'

const deleteReaction = async (req, res, next) => {
    try {
        const reactionToDelete = await Reaction.findById(req.params.id);

        if (!reactionToDelete) {
            return res.status(404).json({
                success: false,
                message: "Reaction not found"
            });
        }

        await Reaction.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Reaction deleted successfully"
        });
    } catch (error) {
        next(error)
    }
}

export default deleteReaction