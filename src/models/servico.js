import mongoose from "mongoose"

const servicoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: Number,
    ativo: { type: Boolean, default: true }
})

export const Servico = mongoose.model("Servico", servicoSchema)