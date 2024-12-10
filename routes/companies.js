import express from 'express'
import { allCompanies, companyById, findCompany } from '../controllers/companies/read.js'
import create from '../controllers/companies/create.js'
import update from '../controllers/companies/update.js'
import deleteCompany from '../controllers/companies/delete.js'
import update_active from '../controllers/companies/toogle.js'
import validator from "../middlewares/validator.js"
import schemaCompaniesCreate from "../schemas/companies/create.js"
import schemaCompaniesUpdate from "../schemas/companies/update.js"
import passport from "../middlewares/passport.js"
import isRole3 from "../middlewares/isRole3.js"
import isRoleAuth from "../middlewares/isRoleAuth.js"


let router = express.Router()

router.get('/allCompanies', passport.authenticate('jwt', { session: false }), isRole3(), allCompanies)
router.get('/companyById/:id', passport.authenticate('jwt', { session: false }), companyById)
router.post("/findCompany", passport.authenticate('jwt', { session: false }), findCompany)
router.post('/create', validator(schemaCompaniesCreate), passport.authenticate('jwt', { session: false }), isRoleAuth(0, 1, 2, 3), create)
router.put('/update/:id', validator(schemaCompaniesUpdate), passport.authenticate('jwt', { session: false }), isRoleAuth(0, 1, 2, 3), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), isRoleAuth(0, 1, 2, 3), deleteCompany)
router.patch('/toggle/:id', passport.authenticate('jwt', { session: false }), isRole3(), update_active)

export default router