import express from "express"
import mongoose from "mongoose"

import usuarioRoutes from "./routes/usuarioRoutes.js"
import clienteRoutes from "./routes/clienteRoutes.js"
import servicoRoutes from "./routes/servicoRoutes.js"

const app = express()
app.use(express.json())

app.use("/usuarios", usuarioRoutes)
app.use("/clientes", clienteRoutes)
app.use("/servicos", servicoRoutes)

mongoose.connect("mongodb://localhost:27017/estudio")
    .then(() => console.log("Conectado ao MongoDB"))

app.listen(3333, () => console.log("Servidor rodando em http://localhost:3333"))