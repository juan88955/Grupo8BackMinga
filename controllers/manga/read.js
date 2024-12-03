import Manga from '../../models/Manga.js'


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
    
const mangaById = async (req, res) => {
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

export { mangaById, mangaByTitle }