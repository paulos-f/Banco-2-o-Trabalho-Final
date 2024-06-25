import { Router } from "express";
import comandoDML from "./controller/comandoDML";
import trigger from "./controller/trigger";
import cliente from "./controller/cliente";

const router = Router();

router.post('/popularBanco', comandoDML.popularBanco);
router.get('/validarDados', comandoDML.validarDados);

router.post('/triggers/criaTriggerAoEditarCliente', trigger.criaTriggerAoEditarCliente);

router.put('/clientes/update', cliente.update);
router.get('/clientes/list', cliente.list);
router.get('/clientes/find/:cod_cliente', cliente.find);
router.post('/clientes/create', cliente.create);
router.delete('/clientes/delete/:cod_cliente', cliente.delete);

export { router };
