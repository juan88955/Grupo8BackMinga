import Category from '../../models/Category.js'

const create = async (req, res, next) => {
    try {
        let newCategory = await Category.create(req.body)
        res.status(201).json({
            success: true,
            Category: newCategory
        })
    } catch (error) {
        next(error)
    }
}

export default create