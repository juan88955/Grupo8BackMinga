import express from 'express'
import { mangaById, mangaByTitle } from '../controllers/manga/read.js'
import create from '../controllers/mangas/create.js'
import update from '../controllers/mangas/update.js'
import deleteManga from '../controllers/mangas/delete.js'
import validator from "../middlewares/validator.js"
import schemaMangasCreate from "../schemas/mangas/create.js"
import schemaMangasUpdate from "../schemas/mangas/update.js"
import passport from "../middlewares/passport.js"
import { mangaWithChapters } from '../controllers/mangas/read.js'

let router = express.Router()

router.get('/mangaByTitle/:title?', mangaByTitle)  
router.get('/mangaById/:id', mangaById)
router.get('/mangaWithChapters/:id', mangaWithChapters)
router.post('/create', validator(schemaMangasCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', validator(schemaMangasUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteManga)

export default router