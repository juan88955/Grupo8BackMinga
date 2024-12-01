import Chapter from '../../models/Chapter.js'

const create = async (req, res) => {
    try {
        let newChapter = await Chapter.create(req.body)
        res.status(201).json({
            success: true,
            chapter: newChapter
        })
    } catch (error) {
        next(error)
    }
}

export default create