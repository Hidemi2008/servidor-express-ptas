import * as repo from "../repositories/usuarios.repository.js";

export async function listar(req, res) {
    res.json(await repo.getUsuarios());
}

export async function buscar(req, res) {
    res.json(await repo.getUsuarioById(req.params.id));
}

export async function criar(req, res) {
    res.json(await repo.createUsuario(req.body));
}

export async function atualizar(req, res) {
    res.json(await repo.updateUsuario(req.params.id, req.body));
}

export async function deletar(req, res) {
    res.json(await repo.deleteUsuario(req.params.id));
}
