import express from 'express'
import "dotenv/config.js"
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './routes/index.js'
import './config/database.js'
import not_found_handler from './middlewares/not_found_handler.js'
import bad_request_handler from './middlewares/bad_request_handler.js'
import error_handler from './middlewares/error_handler.js'

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("Servidor listo en el puerto: " + PORT)

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

server.use('/api', indexRouter)

server.use(bad_request_handler)
server.use(not_found_handler)
server.use(error_handler)

server.listen(PORT, ready)