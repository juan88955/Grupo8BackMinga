import Company from '../../models/Company.js'

const update = async (req, res) => {
    try {
        let updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            company: updatedCompany
        })
    } catch (error) {
        next(error)
    }
}

export default update