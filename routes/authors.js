import express from 'express'
import { allAuthors, authorById, authorByName, findAuthor } from '../controllers/authors/read.js'
import create from '../controllers/authors/create.js'
import update from '../controllers/authors/update.js'
import deleteAuthor from '../controllers/authors/delete.js'
import update_active from '../controllers/authors/toggle.js'
import validator from "../middlewares/validator.js"
import schemaAuthorsCreate from "../schemas/authors/create.js"
import schemaAuthorsUpdate from "../schemas/authors/update.js"
import passport from "../middlewares/passport.js"

let router = express.Router()

router.get('/allAuthors', allAuthors)
router.get('/id/:id', passport.authenticate('jwt', { session: false }), authorById)
router.post("/findAuthor", passport.authenticate('jwt', { session: false }), findAuthor)
router.get('/name/:name', passport.authenticate('jwt', { session: false }), authorByName)
router.post('/createAuthor', validator(schemaAuthorsCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', validator(schemaAuthorsUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteAuthor)
router.patch('/toggle/:id', update_active)

export default router