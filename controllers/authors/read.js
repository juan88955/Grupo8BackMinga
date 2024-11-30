import Author from '../../models/Author.js'
import "../../models/User.js"


let allAuthors = async (req, res) => {
    try {
        let authors = await Author.find()
        res.status(200).json({
            success: true,
            authors: authors
        })
    } catch (error) {
        next(error)
    }
}

let authorById = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let author = await Author.findById(idQuery);
        return res.status(200).json({
            response: author
        });
    } catch (error) {
        next(error);
    }
};

let authorByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;

        if (nameQuery) {
            let regex = new RegExp(nameQuery, 'i');
            let authors = await Author.find({ name: regex });

            return res.status(200).json({
                response: authors
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


export { allAuthors, authorById, authorByName }