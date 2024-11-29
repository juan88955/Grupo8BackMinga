import Comment from '../../models/Comment.js'

const update = async (req, res) => {
    try {
        let updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            comment: updatedComment
        })
    } catch (error) {
        next(error)
    }
}

export default update