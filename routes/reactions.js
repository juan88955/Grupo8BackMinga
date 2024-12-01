import express from 'express'
import { allReactions, reactionById } from '../controllers/reactions/read.js'
import create from '../controllers/reactions/create.js'
import update from '../controllers/reactions/update.js'
import deleteReactions from '../controllers/reactions/delete.js'
import validator from "../middlewares/validator.js"
import schemaReactionsCreate from "../schemas/reactions/create.js"
import schemaReactionsUpdate from "../schemas/reactions/update.js"
import passport from "../middlewares/passport.js"


let router = express.Router()

router.get('/allReactions', allReactions)
router.get('/reactionById/:id', passport.authenticate('jwt', { session: false }), reactionById)
router.post('/createReaction',validator(schemaReactionsCreate), passport.authenticate('jwt', { session: false }), create)
router.put('/update/:id',validator(schemaReactionsUpdate), passport.authenticate('jwt', { session: false }), update)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteReactions)

export default router