import Manga from '../../models/Manga.js'
import Chapter from '../../models/Chapter.js';

let allMangas = async (req, res, next) => {
    try {
        let { title } = req.query
        let query = {}

        if (title) {
            query.title = { $regex: '^' + title, $options: 'i' }
        }

        let manga = await Manga.find(query).populate('category_id').exec()
        return res.status(200).json({
            response: manga
        });
    } catch (error) {
        next(error);
    }
};

let mangasByTitle = async (req, res, next) => {
    try {
        let titleQuery = req.params.title;
        let manga;

        if (titleQuery) {
            manga = await Manga.find({ title: { $regex: `${titleQuery}`, $options: "i" } }).populate('category_id').exec();
        } else {
            manga = await Manga.find().populate('category_id').exec();
        }

        return res.status(200).json({
            response: manga
        });
    } catch (error) {
        next(error);
    }
};

const mangasById = async (req, res) => {
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

const chaptersByManga = async (req, res, next) => {
    try {
        const mangaId = req.params.id;

        const manga = await Manga.findById(mangaId);
        if (!manga) {
            return res.status(404).json({
                success: false,
                message: 'Manga no encontrado.',
            });
        }

        const chapters = await Chapter.find({ manga_id: mangaId });

        return res.status(200).json({
            success: true,
            response: {
                manga,
                chapters,
            },
        });
    } catch (error) {
        next(error);
    }
};

export { allMangas, mangasById, mangasByTitle, chaptersByManga }