import Comment from '../../models/Comment.js'

const allComments = async (req, res) => {
    try {
        let comments = await Comment.find()
        res.status(200).json({
            success: true,
            comments: comments
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const commentById = async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.id)
        res.status(200).json({
            success: true,
            comment: comment
        })
    } catch (error) {
        next(error)
    }
}

export { allComments, commentById }