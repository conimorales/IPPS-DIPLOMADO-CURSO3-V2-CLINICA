import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb://127.0.0.1:27017/clinica'

export const conectar = async() => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Conectado a la BD')
    } catch (error) {
        console.error('Error al conectar a la BD:', error.message)
        process.exit(1)
    }
}