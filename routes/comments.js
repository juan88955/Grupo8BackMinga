import express from 'express'
import { allComments } from '../controllers/comments/read.js'
import create from '../controllers/comments/create.js'
import update from '../controllers/comments/update.js'
import deleteComment from '../controllers/comments/delete.js'

let router = express.Router()

router.get('/allComments', allComments)
router.post('/createComment', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteComment)

export default router