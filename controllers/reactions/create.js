import Reaction from '../../models/Reaction.js'

const create = async (req, res) => {
    try {
        let newReaction = await Reaction.create(req.body)
        res.status(201).json({
            success: true,
            reaction: newReaction
        })
    } catch (error) {
        next(error)
    }
}

export default create