import Company from '../../models/Company.js'

const allCompanies = async (req, res) => {
    try {
        let companies = await Company.find()
        res.status(200).json({
            success: true,
            companies: companies
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const companyById = async (req, res) => {
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