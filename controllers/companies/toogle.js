import Company from '../../models/Company.js'


//solo manejado por el supraadmin
const update_active = async(req,res,next) => {
    try {
        let { id } = req.params
        let company = await Company.findById(id)
        
        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            })
        }

        company.active = !company.active
        await company.save()

        return res.status(200).json({
            success: true,
            active: company.active
        })
    } catch(error) {
        next(error)
    }
}

export default update_active