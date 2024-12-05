import Comment from '../../models/Comment.js'

const create = async (req, res) => {
    try {
        let newComment = await Comment.create(req.body)
        res.status(201).json({
            success: true,
            response: newComment
        })
    } catch (error) {
        next(error)
    }
}

export default create