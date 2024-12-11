import Chapter from '../../models/Chapter.js'

const update = async (req, res, next ) => {
    try {
        console.log(req.body)
        const updateData = req.body
        
        let updatedChapter = await Chapter.findOneAndUpdate(
            { title: req.params.title },
            updateData,
            { new: true }
        )
        res.status(200).json({
            success: true,
            chapter: updatedChapter
        })

    } catch (error) {
        next(error)
    }
}

export default update