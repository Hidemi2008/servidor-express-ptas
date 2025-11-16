import * as repo from "../repositories/categorias.repository.js";

export async function listar(req, res) {
    res.json(await repo.getCategorias());
}

export async function buscar(req, res) {
    res.json(await repo.getCategoriaById(req.params.id));
}

export async function criar(req, res) {
    res.json(await repo.createCategoria(req.body));
}

export async function atualizar(req, res) {
    res.json(await repo.updateCategoria(req.params.id, req.body));
}

export async function deletar(req, res) {
    res.json(await repo.deleteCategoria(req.params.id));
}
