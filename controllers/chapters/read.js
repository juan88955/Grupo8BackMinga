import Chapter from '../../models/Chapter.js'

const allChapters = async (req, res) => {
    try {
        let chapters = await Chapter.find()
        res.status(200).json({
            success: true,
            chapters: chapters
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const chapterById = async (req, res) => {
    try {
        let chapter = await Chapter.findById(req.params.id)
        res.status(200).json({
            success: true,
            chapter: chapter
        })
    } catch (error) {
        next(error)
    }
}

export { allChapters, chapterById }