import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ComandoDML {
  public async triggers(req: Request, res: Response) {
    try {
        
    } catch (error) {
      return res.send(error)
    }
  }
