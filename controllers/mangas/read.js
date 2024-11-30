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

let mangaByTitle = async (req, res, next) => {
    try {
        let nameQuery = req.params.title;

        if (nameQuery) {
            let regex = new RegExp(nameQuery, 'i');
            let title = await Manga.find({ title: regex });

            return res.status(200).json({
                response: title
            });
        } else {
            return res.status(400).json({
                message: "El parámetro 'name' es requerido."
            });
        }
    } catch (error) {
        next(error);
    }
};


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

export { allMangas, mangaById, mangaByTitle }