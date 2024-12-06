import Manga from '../../models/Manga.js'

const create = async (req, res, next) => {
    try {
        let newManga = await Manga.create(req.body)
        res.status(201).json({
            success: true,
            manga: newManga
        })
    } catch (error) {
        next(error)
    }
}

export default create