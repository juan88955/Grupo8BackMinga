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


let findAuthor = async (req, res) => {

    try {
        const { user_id } = req.body;

        if (!user_id) {
            return res.status(400).json({
                success: false,
                message: "id of user is required"
            });
        }

        // Busca el autor en la base de datos
        const author = await Author.findOne({ user_id });


        res.status(200).json({
            success: true,
            response: author || null 
        });
    } catch (error) {
        console.error("error:", error);
        res.status(500).json({
            success: false,
            message: "internal server error"
        });
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


export { allAuthors, authorById, authorByName, findAuthor }