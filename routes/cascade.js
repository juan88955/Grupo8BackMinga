import express from 'express'
import cascadeDeletion from '../controllers/cascadeDelete/cascadeDelete.js'
import passport from '../middlewares/passport.js'

let router = express.Router()

router.delete('/delete/:type/:id', passport.authenticate('jwt', { session: false }), cascadeDeletion.deleteAll)

export default router