import Author from '../../models/Author.js'

const allAuthors = async (req, res) => {
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

const authorById = async (req, res) => {
    try {
        let author = await Author.findById(req.params.id)
        res.status(200).json({
            success: true,
            author: author
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export { allAuthors, authorById }