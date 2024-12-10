import express from 'express'
import { allComments, commentById, commentByAuthOrComp } from '../controllers/comments/read.js'
import create from '../controllers/comments/create.js'
import {update, updateComment} from '../controllers/comments/update.js'
import deleteComment from '../controllers/comments/delete.js'
import validator from "../middlewares/validator.js"
import schemaCommentsCreate from "../schemas/comments/create.js"
import passport from "../middlewares/passport.js"


let router = express.Router()

router.get('/allComments', allComments)
router.get('/comments', commentByAuthOrComp)
router.get('/commentById/:id', passport.authenticate('jwt', { session: false }), commentById)
router.post('/createComment',validator(schemaCommentsCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), update)
router.patch('/updateComment', passport.authenticate('jwt', { session: false }), updateComment)
router.delete('/deleteComment/:id', passport.authenticate('jwt', { session: false }), deleteComment)

export default router