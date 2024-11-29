import Company from '../../models/Company.js'

const deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Company deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteCompany