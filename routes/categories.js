import express from 'express'
import { allCategories, categoryById } from '../controllers/category/read.js'
import create from '../controllers/category/create.js'
import update from '../controllers/category/update.js'
import deleteCategory from '../controllers/category/delete.js'
import validator from "../middlewares/validator.js"
import schemaCtegoriesCreate from "../schemas/categories/create.js"
import schemaCtegoriesUpdate from "../schemas/categories/update.js"
import passport from "../middlewares/passport.js"

let router = express.Router()

router.get('/allCategories', allCategories)
router.get('/categoryById/:id', passport.authenticate('jwt', { session: false }), categoryById)
router.post('/create', validator(schemaCtegoriesCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', validator(schemaCtegoriesUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/deleteCategory/:id', passport.authenticate('jwt', { session: false }), deleteCategory)

export default router