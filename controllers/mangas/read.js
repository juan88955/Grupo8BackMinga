import Manga from '../../models/Manga.js'

const allMangas = async (req, res) => {
    try {
        let mangas = await Manga.find()
        res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const mangaById = async (req, res) => {
    try {
        let manga = await Manga.findById(req.params.id)
        res.status(200).json({
            success: true,
            manga: manga
        })
    } catch (error) {
        next(error)
    }
}

export { allMangas, mangaById }