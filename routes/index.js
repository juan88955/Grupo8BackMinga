import express from 'express'
import usersRouter from './users.js'
import authorsRouter from './authors.js'
import mangasRouter from './mangas.js'
import mangaRouter from './manga.js'
import companiesRouter from './companies.js'
import commentsRouter from './comments.js'
import authRouter from './auth.js'
import categoriesRouter from './categories.js'
import chaptersRouter from "./chapter.js"
import reactionsRouter from "./reactions.js"

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/authors', authorsRouter)
router.use('/mangas', mangasRouter)
router.use('/manga', mangaRouter)
router.use('/companies', companiesRouter)
router.use('/comments', commentsRouter)
router.use('/categories', categoriesRouter)
router.use('/chapters', chaptersRouter)
router.use('/reactions', reactionsRouter)

export default router