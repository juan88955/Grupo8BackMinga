import Author from '../../models/Author.js'

const create = async (req, res) => {
    try {
        let newAuthor = await Author.create(req.body)
        res.status(201).json({
            success: true,
            author: newAuthor
        })
    } catch (error) {
        next(error)
    }
}

export default create