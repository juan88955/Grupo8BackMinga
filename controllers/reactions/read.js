import Reaction from '../../models/Reaction.js'

const allReactions = async (req, res) => {
    try {
        let reactions = await Reaction.find()
        res.status(200).json({
            success: true,
            reactions: reactions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const reactionById = async (req, res) => {
    try {
        let reaction = await Reaction.findById(req.params.id)
        res.status(200).json({
            success: true,
            reaction: reaction
        })
    } catch (error) {
        next(error)
    }
}

export { allReactions, reactionById }