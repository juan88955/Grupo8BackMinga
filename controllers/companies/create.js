import Company from '../../models/Company.js'

const create = async (req, res) => {
    try {
        let newCompany = await Company.create(req.body)
        res.status(201).json({
            success: true,
            company: newCompany
        })
    } catch (error) {
        next(error)
    }
}

export default create