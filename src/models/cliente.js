import mongoose from "mongoose"

const clienteSchema = new mongoose.Schema({
    nome: String,
    tipo: { type: String, enum: ["fisico", "juridico"] },
    documento: String,
    email: String,
    telefone: String,
    endereco: String
})

export const Cliente = mongoose.model("Cliente", clienteSchema)