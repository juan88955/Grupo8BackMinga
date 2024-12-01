import Reaction from '../../models/Reaction.js'

const update = async (req, res) => {
    try {
        let updatedReaction = await Reaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            reaction: updatedReaction
        })
    } catch (error) {
        next(error)
    }
}

export default update