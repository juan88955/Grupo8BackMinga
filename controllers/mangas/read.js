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
// let mangaByTitle = async (req, res, next) => {
//     try {
//         let nameQuery = req.params.title;

//         if (nameQuery) {
//             let regex = new RegExp(nameQuery, 'i');
//             let title = await Manga.find({ title: regex });

//             return res.status(200).json({
//                 response: title
//             });
//         } else {
//             return res.status(400).json({
//                 message: "El parámetro 'name' es requerido."
//             });
//         }
//     } catch (error) {
//         next(error);
//     }
// };


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