import { Cliente } from "../models/cliente.js"

export const listarClientes = async (req, res) => {
    const clientes = await Cliente.find()
    res.json(clientes)
}

export const criarCliente = async (req, res) => {
    const { nome, tipo, documento, email, telefone, endereco } = req.body

    if (!nome || !tipo || !documento) {
        return res.status(400).json({ erro: true, message: "Campos obrigatórios ausentes" })
    }

    try {
        const clienteExistente = await Cliente.findOne({ documento })

        if (clienteExistente) {
            return res.status(409).json({ erro: true, message: "Cliente já cadastrado com este documento" })
        }

        const cliente = new Cliente({ nome, tipo, documento, email, telefone, endereco })
        await cliente.save()

        res.status(201).json({ erro: false, cliente })
    } catch {
        res.status(500).json({ erro: true, message: "Erro ao salvar cliente" })
    }
}

export const buscarClientePorId = async (req, res) => {
    const { id } = req.params
    const cliente = await Cliente.findById(id)
    res.json(cliente)
}

export const atualizarCliente = async (req, res) => {
    const { id } = req.params
    const atualizado = await Cliente.findByIdAndUpdate(id, req.body)
    res.json(atualizado ? { erro: false, message: "Atualizado" } : { erro: true, message: "Não encontrado" })
}

export const deletarCliente = async (req, res) => {
    const { id } = req.params
    const deletado = await Cliente.findByIdAndDelete(id)
    res.json(deletado ? { erro: false, message: "Deletado" } : { erro: true, message: "Não encontrado" })
}