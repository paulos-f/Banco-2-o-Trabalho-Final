import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Clientes {
  public async update(req: Request, res: Response) {
    try {
      const dto = req.body;

      const data = await prisma.cliente.update({
        where: {
          cod_cliente: dto.cod_cliente
        },
        data: {
          ...dto
        }
      })

      return res.send(data);
    } catch (error) {
      return res.send(error)
    }
  }
}

export default new Clientes();