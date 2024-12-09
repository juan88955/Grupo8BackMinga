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

const updateComment = async (req, res) => {
    try {
        const { commentId, updatedMessage } = req.body; 
        if (!commentId || !updatedMessage || updatedMessage.trim() === "") {
            return res.status(400).json({ error: "Comment ID and updatedMessage are required" });
        }


        const updatedComment = await Comment.findByIdAndUpdate(
            {_id: commentId},
            { message: updatedMessage },
            { new: true } 
        )
            
      
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }


        res.status(200).json({
            message: "Comment updated successfully",
            updatedComment,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the comment" });
    }
};


export {update, updateComment}