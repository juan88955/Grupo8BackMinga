import Author from '../../models/Author.js'

const update = async (req, res) => {
    try {
        let updatedAuthor = await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            author: updatedAuthor
        })
    } catch (error) {
        next(error)
    }
}

export default update