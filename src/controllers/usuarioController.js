import { Usuario } from "../models/usuario.js"

export const listarUsuarios = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

export const criarUsuario = async (req, res) => {
    const { nome, email, senha, tipo } = req.body

    if (!email || !senha) {
        return res.status(400).json({ erro: true, message: "Email e senha são obrigatórios" })
    }

    try {
        const existente = await Usuario.findOne({ email })

        if (existente) {
            return res.status(409).json({ erro: true, message: "Usuário já cadastrado com este e-mail" })
        }

        const usuario = new Usuario({ nome, email, senha, tipo })
        await usuario.save()

        res.status(201).json({ erro: false, usuario })
    } catch {
        res.status(500).json({ erro: true, message: "Erro ao criar usuário" })
    }
}



export const buscarUsuarioPorId = async (req, res) => {
    const { id } = req.params
    const usuario = await Usuario.findById(id)
    res.json(usuario)
}

export const atualizarUsuario = async (req, res) => {
    const { id } = req.params
    const atualizado = await Usuario.findByIdAndUpdate(id, req.body)
    res.json(atualizado ? { erro: false, message: "Atualizado" } : { erro: true, message: "Não encontrado" })
}

export const deletarUsuario = async (req, res) => {
    const { id } = req.params
    const deletado = await Usuario.findByIdAndDelete(id)
    res.json(deletado ? { erro: false, message: "Deletado" } : { erro: true, message: "Não encontrado" })
}