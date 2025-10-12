import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Você está na página principal")
})

app.post("/", (req,res) => {
    res.send("Você está na página principal usando post")
})

app.listen(3333, () => console.log("Hello word!!!"))