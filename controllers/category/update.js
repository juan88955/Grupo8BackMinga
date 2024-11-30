import Category from '../../models/Category.js'

const update = async (req, res) => {
    try {
        let updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            Category: updatedCategory
        })
    } catch (error) {
        next(error)
    }
}

export default update