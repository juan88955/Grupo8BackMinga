import express from 'express'
import { allComments, commentById, commentByAuthOrComp } from '../controllers/comments/read.js'
import create from '../controllers/comments/create.js'
import update from '../controllers/comments/update.js'
import deleteComment from '../controllers/comments/delete.js'
import validator from "../middlewares/validator.js"
import schemaCommentsCreate from "../schemas/comments/create.js"
import schemaCommentsUpdate from "../schemas/comments/update.js"
import passport from "../middlewares/passport.js"


let router = express.Router()

router.get('/allComments', allComments)
router.get('/comments', commentByAuthOrComp)
router.get('/commentById/:id', passport.authenticate('jwt', { session: false }), commentById)
router.post('/createComment',validator(schemaCommentsCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id',validator(schemaCommentsUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteComment)

export default router