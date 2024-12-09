import Manga from '../../models/Manga.js'
import Chapter from '../../models/Chapter.js';

let mangaByTitle = async (req, res, next) => {
    try {
        let titleQuery = req.params.title;
        let manga;

        if (titleQuery) {
            manga = await Manga.find({ title: { $regex: `${titleQuery}`, $options: "i" } });
        } else {
            manga = await Manga.find();
        }

        return res.status(200).json({
            response: manga
        });
    } catch (error) {
        next(error);
    }
};

const mangaById = async (req, res, next) => {
    try {
        let manga = await Manga.findById(req.params.id)
        res.status(200).json({
            success: true,
            response: manga
        })
    } catch (error) {
        next(error)
    }
}

let mangaWithChapters = async (req, res, next) => {
    try {
        const mangaId = req.params.id;
        const manga = await Manga.findById(mangaId);
        const chapters = await Chapter.find({ manga_id: mangaId });

        res.status(200).json({
            response: { ...manga.toObject(), chapters }
        });
    } catch (error) {
        next(error);
    }
};


export { mangaById, mangaByTitle, mangaWithChapters }