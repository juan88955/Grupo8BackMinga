import Category from '../../models/Category.js'

const deleteCategory = async (req, res, next) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Category deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteCategory