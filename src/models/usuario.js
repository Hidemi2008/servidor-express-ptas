import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String,
    tipo: { type: String, enum: ["admin", "funcionario"], default: "funcionario" }
})

export const Usuario = mongoose.model("Usuario", usuarioSchema)