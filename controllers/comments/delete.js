import Comment from '../../models/Comment.js'

const deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Comment deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteComment