import Manga from '../../models/Manga.js'
import Chapter from '../../models/Chapter.js';

let allMangas = async (req, res, next) => {
    try {
        let { title } = req.query
        let query = {} //Enviamos un objeto vacio, Traer todas los Mangas

        if (title) {
            query.title = { $regex: '^' + title, $options: 'i' }//Prevalidaciones
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

// Controlador para obtener los capítulos de un manga por su ID
const chaptersByManga = async (req, res, next) => {
    try {
        const mangaId = req.params.id; // Obtenemos el ID del manga desde los parámetros de la ruta

        // Buscamos el manga por su ID
        const manga = await Manga.findById(mangaId);
        if (!manga) {
            return res.status(404).json({
                success: false,
                message: 'Manga no encontrado.',
            });
        }

        // Buscamos los capítulos relacionados con el manga
        const chapters = await Chapter.find({ manga_id: mangaId });

        // Respondemos con el manga y sus capítulos
        return res.status(200).json({
            success: true,
            response: {
                manga,
                chapters,
            },
        });
    } catch (error) {
        next(error); // Pasamos el error al middleware de manejo de errores
    }
};

export { allMangas, mangasById, mangasByTitle, chaptersByManga }