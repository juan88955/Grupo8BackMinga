import { Router } from 'express'
import passport from '../middlewares/passport.js'
import { getManagerProfile } from '../controllers/managerProfile/read.js'

const managerRouter = Router()

managerRouter.get('/profile', passport.authenticate('jwt', {session: false}), getManagerProfile)

export default managerRouter