import express from 'express'
import { allChapters, chapterById, getCommentsByChapterId } from '../controllers/chapters/read.js'
import { create, createComment } from '../controllers/chapters/create.js'
import update from '../controllers/chapters/update.js'
import deleteChapter from '../controllers/chapters/delete.js'
import validator from "../middlewares/validator.js"
import schemaChaptersCreate from "../schemas/chapters/create.js"
import schemaChaptersUpdate from "../schemas/chapters/update.js"
import passport from "../middlewares/passport.js"


let router = express.Router()

router.get('/allChapters', allChapters)
router.get('/chapterById/:id', passport.authenticate('jwt', {session: false}), chapterById)
router.get("/:chapterId/comments", getCommentsByChapterId)
router.post("/:chapterId/comments", createComment)
router.post('/createChapter', validator(schemaChaptersCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:title', validator(schemaChaptersUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete', passport.authenticate('jwt', { session: false }), deleteChapter)

export default router