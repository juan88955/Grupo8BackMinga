import Chapter from '../../models/Chapter.js'

const update = async (req, res) => {
    try {
        let updatedChapter = await Chapter.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            chapter: updatedChapter
        })
    } catch (error) {
        next(error)
    }
}

export default update