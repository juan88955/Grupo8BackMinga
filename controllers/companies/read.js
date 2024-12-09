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

let findCompany = async (req, res) => {

    try {
        const { user_id } = req.body;

        if (!user_id) {
            return res.status(400).json({
                success: false,
                message: "id of user is required"
            });
        }

        // Busca el autor en la base de datos
        const company = await Company.findOne({ user_id });


        res.status(200).json({
            success: true,
            response: company || null 
        });
    } catch (error) {
        console.error("error:", error);
        res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
}
export { allCompanies, companyById, findCompany }