import express, { json } from "express"

const app = express()

app.use(express.json())

const usuario = []

app.get("/", (req, res) => {
    res.send("Você está na página principal")
})

app.post("/user", (req,res) => {
    console.log(req.body)

    res.send("Você está na página principal usando post")
})

app.listen(3333, () => console.log("Hello word!!!"))