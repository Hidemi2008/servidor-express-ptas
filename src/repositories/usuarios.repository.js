import { connectDB } from "../databases.js";
import { ObjectId } from "mongodb";

export async function getUsuarios() {
    const db = await connectDB();
    return db.collection("usuarios").find().toArray();
}

export async function getUsuarioById(id) {
    const db = await connectDB();
    return db.collection("usuarios").findOne({ _id: new ObjectId(id) });
}

export async function createUsuario(data) {
    const db = await connectDB();
    return db.collection("usuarios").insertOne(data);
}

export async function updateUsuario(id, data) {
    const db = await connectDB();
    return db.collection("usuarios").updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
}

export async function deleteUsuario(id) {
    const db = await connectDB();
    return db.collection("usuarios").deleteOne({ _id: new ObjectId(id) });
}
