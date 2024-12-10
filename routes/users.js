import { Router } from "express"
import { allUser, usersById, usersByEmail, usersByRole, usersOnline, userValidate } from "../controllers/users/read.js"
import register from "../controllers/users/register.js"
import { update, updateRole } from "../controllers/users/update.js"
import deleteUser from "../controllers/users/delete.js"
import schemaUsersCreate from "../schemas/users/create.js"
import schemaUsersUpdate from "../schemas/users/update.js"
import validator from "../middlewares/validator.js"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import passport from "../middlewares/passport.js"
import generateToken from "../middlewares/generateToken.js"
import isRole3 from "../middlewares/isRole3.js"

const routerUsers = Router()

routerUsers.get('/allUser',passport.authenticate('jwt', { session: false }),isRole3(),allUser)
routerUsers.get('/id/:id', passport.authenticate('jwt', { session: false }), usersById)
routerUsers.get('/email/:email', passport.authenticate('jwt', { session: false }), usersByEmail)
routerUsers.get('/role/:role', passport.authenticate('jwt', { session: false }), usersByRole)
routerUsers.get('/online/:online', passport.authenticate('jwt', { session: false }), usersOnline)
routerUsers.post('/register', validator(schemaUsersCreate), accountExists, createHash, generateToken, register)
routerUsers.put('/update/:id', validator(schemaUsersUpdate), passport.authenticate('jwt', { session: false }), createHash, update)
routerUsers.patch('/updateRole', passport.authenticate('jwt', { session: false }), updateRole)
routerUsers.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteUser)
routerUsers.get('/validateToken', passport.authenticate('jwt', { session: false }), userValidate)

export default routerUsers