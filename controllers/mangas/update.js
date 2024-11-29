import Manga from '../../models/Manga.js'

const update = async (req, res) => {
    try {
        let updatedManga = await Manga.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            manga: updatedManga
        })
    } catch (error) {
        next(error)
    }
}

export default update