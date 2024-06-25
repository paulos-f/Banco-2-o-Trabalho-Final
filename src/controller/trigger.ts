import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ComandoDML {
  public async triggers(req: Request, res: Response) {
    try {
        prisma.$use(async (params, next) => {
        if (params.model === 'Cliente' && params.action === 'create') {
        const result = await next(params);
        
        // Após a inserção, insere no historico_clien
        await prisma.historicoClien.create({
          data: {
            dt_insercao: new Date(),
            nm_usuario: user,
            cod_cliente: result.cod_cliente,
            cpf: result.cpf,
            nome: result.nome,
            sexo: result.sexo,
            dt_nascimento: result.dt_nascimento,
            dt_cadastro: result.dt_cadastro,
            num_contato: result.num_contato,
            email: result.email,
            endereco: result.endereco
          },
        });
        console.log('Novos dados inseridos no historico_clien');
        return result;
      } else {
        return next(params);
      }
    })
    } catch (error) {
      return res.send(error)
    }
  }
