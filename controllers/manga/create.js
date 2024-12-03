import Manga from '../../models/Manga.js'

const create = async (req, res) => {
    try {
        let newManga = await Manga.create(req.body)
        res.status(201).json({
            success: true,
            response: newManga
        })
    } catch (error) {
        next(error)
    }
}

export default create