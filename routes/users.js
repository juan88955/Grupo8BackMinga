import { Router } from "express"
import { allUser, userById } from "../controllers/users/read.js"
import register from "../controllers/users/register.js"
import update from "../controllers/users/update.js"
import deleteUser from "../controllers/users/delete.js"
import userSchema from "../schemas/userSchema.js"
import validator from "../middlewares/validator.js"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import passport from "../middlewares/passport.js"
import generateToken from "../middlewares/generateToken.js"

const routerUsers = Router()

routerUsers.get('/all', passport.authenticate('jwt', { session: false }), allUser)
routerUsers.get('/id/:id', passport.authenticate('jwt', { session: false }), userById)
routerUsers.post('/register', validator(userSchema), accountExists, createHash, generateToken, register)
routerUsers.put('/update/:id', passport.authenticate('jwt', { session: false }), update)
routerUsers.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteUser)

export default routerUsers