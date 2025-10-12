import express, { json } from "express"

const app = express()

app.use(express.json())

const usuarios = []

app.get("/", (req, res) => {
    res.send("Você está na página principal")
})

app.post("/user", (req, res) => {
    const { nome, idade, email } = req.body

    if (nome && idade && email) {
        usuarios.push({ nome, idade, email })
        return res.status(201).send("Usuário criado")
    }

    return res.status(400).send("Informações inválidas")
})

app.get("/user", (req, res) => {
    res.status(200).json(usuarios)
})

app.listen(3333, () => console.log("Hello word!!!"))