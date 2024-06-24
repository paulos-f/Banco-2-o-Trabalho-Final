import { Router } from "express";
import comandoDML from "./controller/comandoDML";

const router = Router();

router.post('/popularBanco', comandoDML.popularBanco);
router.get('/validarDados', comandoDML.validarDados);

export { router };
