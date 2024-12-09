import Company from '../../models/Company.js'

const allCompanies = async (req, res, next) => {
    try {
        let companies = await Company.find()
        res.status(200).json({
            success: true,
            companies: companies
        })
    } catch (error) {
        next(error)
    }
}

const companyById = async (req, res, next) => {
    try {
        let company = await Company.findById(req.params.id)
        res.status(200).json({
            success: true,
            company: company
        })
    } catch (error) {
        next(error)
    }
}

export { allCompanies, companyById }