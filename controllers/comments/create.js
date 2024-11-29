import Comment from '../../models/Comment.js'

const create = async (req, res) => {
    try {
        let newComment = await Comment.create(req.body)
        res.status(201).json({
            success: true,
            comment: newComment
        })
    } catch (error) {
        next(error)
    }
}

export default create