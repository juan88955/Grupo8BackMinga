import Chapter from '../../models/Chapter.js'

const deleteChapter = async (req, res) => {
    try {
        await Chapter.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Chapter deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteChapter