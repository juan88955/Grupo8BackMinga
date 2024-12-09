import Reaction from '../../models/Reaction.js'

const allReactions = async (req, res, next) => {
    try {
        let reactions = await Reaction.find()
            .populate('manga_id', ['title', 'cover_photo'])
            .populate('author_id', ['name', 'photo'])
            .populate('company_id', ['name', 'photo'])

        if (!reactions.length) {
            return res.status(404).json({
                success: false,
                message: 'No reactions found'
            })
        }

        return res.status(200).json({
            success: true,
            reactions: reactions
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const reactionById = async (req, res, next) => {
    try {
        let reaction = await Reaction.findById(req.params.id)
            .populate('manga_id', ['title', 'cover_photo'])
            .populate('author_id', ['name', 'photo'])
            .populate('company_id', ['name', 'photo'])

        if (!reaction) {
            return res.status(404).json({
                success: false,
                message: 'Reaction not found'
            })
        }

        next()
    } catch (error) {
        next(error)
    }
}

export { allReactions, reactionById }