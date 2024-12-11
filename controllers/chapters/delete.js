import Chapter from '../../models/Chapter.js'

const deleteChapter = async (req, res, next ) => {
    try {
        const {title} = req.query

        await Chapter.findOneAndDelete({title: title})
        res.status(200).json({
            success: true,
            message: "Chapter deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteChapter