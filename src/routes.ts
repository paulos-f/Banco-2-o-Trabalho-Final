import { Request, Response, Router } from "express";
import comandoDML from "./controller/comandoDML";

const router = Router();

router.get('/comandosDML', comandoDML.popularBanco);

router.get('/teste', (req: Request, res: Response) => {
    res.send("Chegou!")
});

export { router };
