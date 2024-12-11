import { Router } from 'express'
import passport from '../middlewares/passport.js'
import { getProfile } from '../controllers/profile/read.js'

const managerRouter = Router()

managerRouter.get('/profiles', passport.authenticate('jwt', {session: false}), getProfile)

export default managerRouter