import { Router } from "express";
import comandoDML from "./controller/comandoDML";
import trigger from "./controller/trigger";
import cliente from "./controller/cliente";
import { PrismaClient } from "@prisma/client";
import function1 from "./controller/function1";
import function2 from "./controller/function2";

const router = Router();
const prisma = new PrismaClient()


router.post('/popularBanco', comandoDML.popularBanco);
router.get('/validarDados', comandoDML.validarDados);

router.post('/triggers/criaTriggerAoEditarCliente', trigger.criaTriggerAoEditarCliente);

router.put('/clientes/update', cliente.update);

router.post('/function1', function1.modeloSinistroCausa);

router.post('/function2', function2.sinistroPlanoTaxa);

export { router };
