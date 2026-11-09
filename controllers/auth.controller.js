import * as service from '../services/auth.service.js'

export const registrar = async(req, res) => {
    try {
        const resultado = await service.registrar(req.body)
        return res.status(201).json(resultado)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

export const login = async(req, res) => {
    const { email, password } = req.body
    const resultado = await service.login(email, password)

    if (!resultado) {
        return res.status(401).json({ error: 'Credenciales inválidas' })
    }
    return res.json(resultado)
}