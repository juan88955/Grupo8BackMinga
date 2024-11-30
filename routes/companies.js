import express from 'express'
import { allCompanies, companyById } from '../controllers/companies/read.js'
import create from '../controllers/companies/create.js'
import update from '../controllers/companies/update.js'
import deleteCompany from '../controllers/companies/delete.js'
import validator from "../middlewares/validator.js"
import schemaCompaniesCreate from "../schemas/companies/create.js"
import schemaCompaniesUpdate from "../schemas/companies/update.js"
import passport from "../middlewares/passport.js"


let router = express.Router()

router.get('/allCompanies', passport.authenticate('jwt', { session: false }), allCompanies)
router.get('/companyById/:id', passport.authenticate('jwt', { session: false }), companyById)
router.post('/create', validator(schemaCompaniesCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', validator(schemaCompaniesUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteCompany)

export default router