import mongoose from 'mongoose'

// configuracion de conexion a la base de datos
let url = process.env.URI_MONGO

//URL de la base de datos
console.log(url)

// Conexion a la base de datos
async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log(error)
    }
}

connectDB()