import express from 'express'
import { allMangas } from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import update from '../controllers/mangas/update.js'
import deleteManga from '../controllers/mangas/delete.js'

let router = express.Router()

router.get('/allMangas', allMangas)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteManga)

export default router