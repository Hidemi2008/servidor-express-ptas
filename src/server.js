import express, { json } from "express"

const app = express()

app.use(express.json())

const usuarios = []

app.get("/", (req, res) => {
    res.send("Você está na página principal")
})

app.post("/user", (req, res) => {
    const {nome, idade} = req.body

    usuarios.push({nome,idade})

    console.log(usuarios)

    res.send("Você está na página principal usando post")

    res.status(201).send("Usuário criado")
})

app.get("/user", (req,res) => {
    res.status(200).json(usuarios)
})

app.listen(3333, () => console.log("Hello word!!!"))