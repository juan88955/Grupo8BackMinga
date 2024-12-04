import express from 'express'
import { allMangas, mangasById, mangasByTitle, chaptersByManga } from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import update from '../controllers/mangas/update.js'
import deleteManga from '../controllers/mangas/delete.js'
import validator from "../middlewares/validator.js"
import schemaMangasCreate from "../schemas/mangas/create.js"
import schemaMangasUpdate from "../schemas/mangas/update.js"
import passport from "../middlewares/passport.js"

let router = express.Router()

router.get('/allMangas', allMangas)
router.get('/mangasByTitle/:title?', mangasByTitle)  
router.get('/:id/chapters', chaptersByManga)  
router.get('/mangasById/:id', passport.authenticate('jwt', { session: false }), mangasById)
router.post('/create', validator(schemaMangasCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', validator(schemaMangasUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteManga)

export default router