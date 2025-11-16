// src/databases.js
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // altere quando quiser
const client = new MongoClient(uri);

export async function connectDB() {
    try {
        if (!client.topology || !client.topology.isConnected()) {
            await client.connect();
            console.log("MongoDB conectado com sucesso!");
        }
        return client.db("meu_banco_generico"); // troque depois
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
        throw err;
    }
}
