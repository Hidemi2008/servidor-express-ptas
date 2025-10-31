import express, { json } from "express"

import Database from "./databases.js"

const app = express()

app.use(express.json())

const database = new Database()

app.get("/pratos", (req,res) => {
    res.send("Retornando pratos")
})

app.post("/pratos", (req,res) => {
    res.send("Salvando novo prato")
})

app.put("/pratos", (req,res) => {
    res.send("Alterando prato")
})

app.delete("/pratos", (req,res) => {
    res.send("Deletando prato")
})

app.get("/comanda", (req,res) => {
    res.send("Retornando comanda")
})

app.post("/comanda", (req,res) => {
    res.send("Salvando novo comanda")
})

app.put("/comanda", (req,res) => {
    res.send("Alterando comanda")
})

app.delete("/comanda", (req,res) => {
    res.send("Deletando comanda")
})


app.listen(3333, () => console.log("Hello word!!!"))