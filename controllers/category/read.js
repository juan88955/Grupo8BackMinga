import Category from '../../models/Category.js'

const allCategories = async (req, res, next) => {
    try {
        let categorys = await Category.find()
        res.status(200).json({
            success: true,
            categorys: categorys
        })
    } catch (error) {
        next(error)
    }
}

const categoryById = async (req, res) => {
    try {
        let category = await Category.findById(req.params.id)
        res.status(200).json({
            success: true,
            category: category
        })
    } catch (error) {
        next(error)
    }
}

export { allCategories, categoryById }