import { Router } from "express"
import {
    listarServicos,
    criarServico,
    buscarServicoPorId,
    atualizarServico,
    deletarServico
} from "../controllers/servicoController.js"

const router = Router()

router.get("/", listarServicos)
router.post("/", criarServico)
router.get("/:id", buscarServicoPorId)
router.put("/:id", atualizarServico)
router.delete("/:id", deletarServico)

export default router