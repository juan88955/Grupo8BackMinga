import Author from '../../models/Author.js'

const update_active = async(req,res,next) => {
    try {
        let { id } = req.params
        let author = await Author.findById(id)
        
        if (!author) {
            return res.status(404).json({
                success: false,
                message: 'Author not found'
            })
        }

        author.active = !author.active
        await author.save()

        return res.status(200).json({
            success: true,
            active: author.active
        })
    } catch(error) {
        next(error)
    }
}

export default update_active