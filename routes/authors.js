import express from 'express'
import { allAuthors } from '../controllers/authors/read.js'
import create from '../controllers/authors/create.js'
import update from '../controllers/authors/update.js'
import deleteAuthor from '../controllers/authors/delete.js'

let router = express.Router()

router.get('/allAuthors', allAuthors)
router.post('/createAuthor', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteAuthor)

export default router