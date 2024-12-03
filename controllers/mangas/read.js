import Manga from '../../models/Manga.js'

let allMangas = async (req, res, next) => {
    try {
        let {name} = req.query 
        let query = {} //Enviamos un objeto vacio, Traer todas los Mangas

        if (name){
            query.name = {$regex: '^'+name, $options: 'i'}//Prevalidaciones
        }
        
        let manga = await Manga.find(query);
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

export { allMangas, mangasById, mangasByTitle }