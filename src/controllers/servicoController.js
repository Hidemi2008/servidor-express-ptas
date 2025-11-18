import { Servico } from "../models/servico.js"

export const listarServicos = async (req, res) => {
    const servicos = await Servico.find()
    res.json(servicos)
}

export const criarServico = async (req, res) => {
    const { nome, descricao, preco } = req.body

    if (!nome || !preco) {
        return res.status(400).json({ erro: true, message: "Nome e preço são obrigatórios" })
    }

    try {
        const existente = await Servico.findOne({ nome })

        if (existente) {
            return res.status(409).json({ erro: true, message: "Serviço já cadastrado com este nome" })
        }

        const servico = new Servico({ nome, descricao, preco })
        await servico.save()

        res.status(201).json({ erro: false, servico })
    } catch {
        res.status(500).json({ erro: true, message: "Erro ao salvar serviço" })
    }
}

export const buscarServicoPorId = async (req, res) => {
    const { id } = req.params
    const servico = await Servico.findById(id)
    res.json(servico)
}

export const atualizarServico = async (req, res) => {
    const { id } = req.params
    const atualizado = await Servico.findByIdAndUpdate(id, req.body)
    res.json(atualizado ? { erro: false, message: "Atualizado" } : { erro: true, message: "Não encontrado" })
}

export const deletarServico = async (req, res) => {
    const { id } = req.params
    const deletado = await Servico.findByIdAndDelete(id)
    res.json(deletado ? { erro: false, message: "Deletado" } : { erro: true, message: "Não encontrado" })
}