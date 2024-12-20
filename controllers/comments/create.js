import Comment from '../../models/Comment.js'

const create = async (req, res, next) => {
    try {
        const { chapter_id, message, author_id, company_id } = req.body;

        if (!chapter_id) {
            return res.status(400).json({
                success: false,
                message: 'Chapter ID is required'
            });
        }

        if (!message) {
            return res.status(400).json({
                success: false,
                message: 'Comment message is required'
            });
        }

        const commentData = {
            chapter_id,
            message,
            author_id,
            company_id
        };

        let newComment = await Comment.create(commentData);

        res.status(201).json({
            success: true,
            response: newComment
        });
    } catch (error) {
        next(error);
    }
}

export default create