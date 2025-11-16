import { connectDB } from "../databases.js";

export async function getItens() {
    const db = await connectDB();
    return db.collection("itens").find().toArray();
}

export async function getItemById(id) {
    const db = await connectDB();
    return db.collection("itens").findOne({ _id: new ObjectId(id) });
}

export async function createItem(data) {
    const db = await connectDB();
    return db.collection("itens").insertOne(data);
}

export async function updateItem(id, data) {
    const db = await connectDB();
    return db.collection("itens").updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
}

export async function deleteItem(id) {
    const db = await connectDB();
    return db.collection("itens").deleteOne({ _id: new ObjectId(id) });
}
