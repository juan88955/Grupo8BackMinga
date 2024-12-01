import express from 'express'
import { allMangas, mangaById, mangaByTitle } from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import update from '../controllers/mangas/update.js'
import deleteManga from '../controllers/mangas/delete.js'
import validator from "../middlewares/validator.js"
import schemaMangasCreate from "../schemas/mangas/create.js"
import schemaMangasUpdate from "../schemas/mangas/update.js"
import passport from "../middlewares/passport.js"

let router = express.Router()

router.get('/allMangas', allMangas)
router.get('/mangaByTitle/:title?', mangaByTitle)  // Quitamos passport.authenticaterouter.get('/mangaById/:id', passport.authenticate('jwt', { session: false }), mangaById)
router.post('/create', validator(schemaMangasCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', validator(schemaMangasUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteManga)

export default router