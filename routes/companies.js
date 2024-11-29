import express from 'express'
import { allCompanies } from '../controllers/companies/read.js'
import create from '../controllers/companies/create.js'
import update from '../controllers/companies/update.js'
import deleteCompany from '../controllers/companies/delete.js'

let router = express.Router()

router.get('/allCompanies', allCompanies)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteCompany)

export default router