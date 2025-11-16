import * as repo from "../repositories/itens.repository.js";

export async function listar(req, res) {
    const itens = await repo.getItens();
    res.json(itens);
}

export async function buscar(req, res) {
    const item = await repo.getItemById(req.params.id);
    res.json(item);
}

export async function criar(req, res) {
    const result = await repo.createItem(req.body);
    res.json(result);
}

export async function atualizar(req, res) {
    const result = await repo.updateItem(req.params.id, req.body);
    res.json(result);
}

export async function deletar(req, res) {
    const result = await repo.deleteItem(req.params.id);
    res.json(result);
}
