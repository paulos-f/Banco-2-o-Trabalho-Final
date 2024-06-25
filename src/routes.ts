import { Router } from "express";
import comandoDML from "./controller/comandoDML";
import trigger from "./controller/trigger";
import cliente from "./controller/cliente";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()


router.post('/popularBanco', comandoDML.popularBanco);
router.get('/validarDados', comandoDML.validarDados);

router.post('/triggers/criaTriggerAoEditarCliente', trigger.criaTriggerAoEditarCliente);

router.put('/clientes/update', cliente.update);

export { router };
