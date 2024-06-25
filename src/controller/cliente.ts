import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Clientes {

  public async list(req: Request, res: Response) {
    try {
      const data = await prisma.cliente.findMany();
      return res.send(data);
    } catch (error) {
      return res.send(error)
    }
  }

  public async find(req: Request, res: Response) {
    try {
      const { cod_cliente } = req.params;

      const data = await prisma.cliente.findUnique({
        where: {
          cod_cliente: Number(cod_cliente)
        }
      })

      return res.send(data);
    } catch (error) {
      return res.send(error)
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const dto = req.body;

      const data = await prisma.cliente.create({
        data: {
          ...dto
        }
      })

      return res.send(data);
    } catch (error) {
      return res.send(error)
    }
  }

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

  public async delete(req: Request, res: Response) {
    try {
      const { cod_cliente } = req.params;

      const data = await prisma.cliente.delete({
        where: {
          cod_cliente: Number(cod_cliente)
        }
      })

      return res.send(data);
    } catch (error) {
      return res.send(error)
    }
  }
}

export default new Clientes();