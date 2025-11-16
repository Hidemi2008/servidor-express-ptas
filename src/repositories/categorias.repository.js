import { connectDB } from "../databases.js";
import { ObjectId } from "mongodb";

export async function getCategorias() {
    const db = await connectDB();
    return db.collection("categorias").find().toArray();
}

export async function getCategoriaById(id) {
    const db = await connectDB();
    return db.collection("categorias").findOne({ _id: new ObjectId(id) });
}

export async function createCategoria(data) {
    const db = await connectDB();
    return db.collection("categorias").insertOne(data);
}

export async function updateCategoria(id, data) {
    const db = await connectDB();
    return db.collection("categorias").updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
}

export async function deleteCategoria(id) {
    const db = await connectDB();
    return db.collection("categorias").deleteOne({ _id: new ObjectId(id) });
}
