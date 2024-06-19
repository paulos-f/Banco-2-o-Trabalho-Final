import { Request, Response, Router } from "express";
import comandoDML from "./controller/comandoDML";

const router = Router();

router.get('/comandosDML/popularBanco', comandoDML.popularBanco);
router.delete('/comandosDML/limparBanco', comandoDML.limparBanco);
router.get('/comandosDML/teste', comandoDML.teste);

router.get('/teste', (req: Request, res: Response) => {
    res.send("Chegou!")
});

export { router };
