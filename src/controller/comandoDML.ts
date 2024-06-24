import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ComandoDML {
  public async popularBanco(req: Request, res: Response) {
    try {

      await prisma.cliente.create({
        data: { cod_cliente: 1, cpf: '12345678901', nome: 'João da Silva', sexo: 'M', dt_nascimento: new Date('1980-01-15'), dt_cadastro: new Date('2022-01-01'), num_contato: '11987654321', email: 'joao.silva@gmail.com', endereco: 'Rua A, 123' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 2, cpf: '23456789012', nome: 'Maria Oliveira', sexo: 'F', dt_nascimento: new Date('1990-02-20'), dt_cadastro: new Date('2022-02-01'), num_contato: '21987654321', email: 'maria.oliveira@gmail.com', endereco: 'Rua B, 456' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 3, cpf: '34567890123', nome: 'Carlos Pereira', sexo: 'M', dt_nascimento: new Date('1985-03-25'), dt_cadastro: new Date('2022-03-01'), num_contato: '31987654321', email: 'carlos.pereira@gmail.com', endereco: 'Rua C, 789' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 4, cpf: '45678901234', nome: 'Ana Souza', sexo: 'F', dt_nascimento: new Date('1995-04-30'), dt_cadastro: new Date('2022-04-01'), num_contato: '41987654321', email: 'ana.souza@gmail.com', endereco: 'Rua D, 101' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 5, cpf: '56789012345', nome: 'Paulo Lima', sexo: 'M', dt_nascimento: new Date('1988-05-10'), dt_cadastro: new Date('2022-05-01'), num_contato: '51987654321', email: 'paulo.lima@gmail.com', endereco: 'Rua E, 202' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 6, cpf: '67890123456', nome: 'Fernanda Santos', sexo: 'F', dt_nascimento: new Date('1992-06-15'), dt_cadastro: new Date('2022-06-01'), num_contato: '61987654321', email: 'fernanda.santos@gmail.com', endereco: 'Rua F, 303' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 7, cpf: '78901234567', nome: 'Ricardo Gomes', sexo: 'M', dt_nascimento: new Date('1983-07-20'), dt_cadastro: new Date('2022-07-01'), num_contato: '71987654321', email: 'ricardo.gomes@gmail.com', endereco: 'Rua G, 404' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 8, cpf: '89012345678', nome: 'Juliana Costa', sexo: 'F', dt_nascimento: new Date('1987-08-25'), dt_cadastro: new Date('2022-08-01'), num_contato: '81987654321', email: 'juliana.costa@gmail.com', endereco: 'Rua H, 505' }
      })
      await prisma.cliente.create({
        data: { cod_cliente: 9, cpf: '90123456789', nome: 'Marcos Alves', sexo: 'M', dt_nascimento: new Date('1981-09-30'), dt_cadastro: new Date('2022-09-01'), num_contato: '91987654321', email: 'marcos.alves@gmail.com', endereco: 'Rua I, 606' }
      })
      await prisma.cliente.create({
        data: {
          cod_cliente: 10, cpf: '01234567890', nome: 'Bianca Machado', sexo: 'F', dt_nascimento: new Date('1993-10-05'), dt_cadastro: new Date('2022-10-01'), num_contato: '01987654321', email: 'bianca.machado@gmail.com', endereco: 'Rua J, 707'
        }
      })

      await prisma.modelo.create({ data: { cod_modelo: 1, nm_modelo: 'Galaxy S21' } });
      await prisma.modelo.create({ data: { cod_modelo: 2, nm_modelo: 'iPhone 12' } });
      await prisma.modelo.create({ data: { cod_modelo: 3, nm_modelo: 'Moto G8' } });
      await prisma.modelo.create({ data: { cod_modelo: 4, nm_modelo: 'Xperia 5' } });
      await prisma.modelo.create({ data: { cod_modelo: 5, nm_modelo: 'Galaxy S20' } });
      await prisma.modelo.create({ data: { cod_modelo: 6, nm_modelo: 'iPhone 11' } });
      await prisma.modelo.create({ data: { cod_modelo: 7, nm_modelo: 'Moto G7' } });
      await prisma.modelo.create({ data: { cod_modelo: 8, nm_modelo: 'Xperia 4' } });
      await prisma.modelo.create({ data: { cod_modelo: 9, nm_modelo: 'Galaxy S10' } });
      await prisma.modelo.create({ data: { cod_modelo: 10, nm_modelo: 'iPhone X' } });

      await prisma.marca.create({ data: { cod_marca: 1, cod_modelo: 1, nm_marca: 'Samsung' } });
      await prisma.marca.create({ data: { cod_marca: 2, cod_modelo: 2, nm_marca: 'Apple' } });
      await prisma.marca.create({ data: { cod_marca: 3, cod_modelo: 3, nm_marca: 'Motorola' } });
      await prisma.marca.create({ data: { cod_marca: 4, cod_modelo: 4, nm_marca: 'Sony' } });
      await prisma.marca.create({ data: { cod_marca: 5, cod_modelo: 5, nm_marca: 'Samsung' } });
      await prisma.marca.create({ data: { cod_marca: 6, cod_modelo: 6, nm_marca: 'Apple' } });
      await prisma.marca.create({ data: { cod_marca: 7, cod_modelo: 7, nm_marca: 'Motorola' } });
      await prisma.marca.create({ data: { cod_marca: 8, cod_modelo: 8, nm_marca: 'Sony' } });
      await prisma.marca.create({ data: { cod_marca: 9, cod_modelo: 9, nm_marca: 'Samsung' } });
      await prisma.marca.create({ data: { cod_marca: 10, cod_modelo: 10, nm_marca: 'Apple' } });

      await prisma.dispositivo.create({ data: { cod_dispositivo: 1, cod_modelo: 1, cod_cliente: 1 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 2, cod_modelo: 2, cod_cliente: 2 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 3, cod_modelo: 3, cod_cliente: 3 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 4, cod_modelo: 4, cod_cliente: 4 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 5, cod_modelo: 5, cod_cliente: 5 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 6, cod_modelo: 6, cod_cliente: 6 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 7, cod_modelo: 7, cod_cliente: 7 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 8, cod_modelo: 8, cod_cliente: 8 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 9, cod_modelo: 9, cod_cliente: 9 } });
      await prisma.dispositivo.create({ data: { cod_dispositivo: 10, cod_modelo: 10, cod_cliente: 10 } });

      await prisma.plano.create({ data: { cod_plano: 1, desc_plano: 'Plano Básico', valor: 29.99 }, });
      await prisma.plano.create({ data: { cod_plano: 2, desc_plano: 'Plano Intermediário', valor: 49.99 }, });
      await prisma.plano.create({ data: { cod_plano: 3, desc_plano: 'Plano Avançado', valor: 69.99 }, });
      await prisma.plano.create({ data: { cod_plano: 4, desc_plano: 'Plano Premium', valor: 89.99 }, });
      await prisma.plano.create({ data: { cod_plano: 5, desc_plano: 'Plano Família', valor: 109.99 }, });
      await prisma.plano.create({ data: { cod_plano: 6, desc_plano: 'Plano Corporativo', valor: 199.99 }, });
      await prisma.plano.create({ data: { cod_plano: 7, desc_plano: 'Plano Estudante', valor: 19.99 }, });
      await prisma.plano.create({ data: { cod_plano: 8, desc_plano: 'Plano Jovem', valor: 39.99 }, });
      await prisma.plano.create({ data: { cod_plano: 9, desc_plano: 'Plano Sênior', valor: 59.99 }, });
      await prisma.plano.create({ data: { cod_plano: 10, desc_plano: 'Plano Completo', valor: 79.99 } });

      await prisma.seguro.create({ data: { cod_seguro: 1, cod_cliente: 1, dt_inicio: new Date('2022-01-01'), dt_fim: new Date('2023-01-01'), cod_plano: 1 }, });
      await prisma.seguro.create({ data: { cod_seguro: 2, cod_cliente: 2, dt_inicio: new Date('2022-02-01'), dt_fim: new Date('2023-02-01'), cod_plano: 2 }, });
      await prisma.seguro.create({ data: { cod_seguro: 3, cod_cliente: 3, dt_inicio: new Date('2022-03-01'), dt_fim: new Date('2023-03-01'), cod_plano: 3 }, });
      await prisma.seguro.create({ data: { cod_seguro: 4, cod_cliente: 4, dt_inicio: new Date('2022-04-01'), dt_fim: new Date('2023-04-01'), cod_plano: 4 }, });
      await prisma.seguro.create({ data: { cod_seguro: 5, cod_cliente: 5, dt_inicio: new Date('2022-05-01'), dt_fim: new Date('2023-05-01'), cod_plano: 5 }, });
      await prisma.seguro.create({ data: { cod_seguro: 6, cod_cliente: 6, dt_inicio: new Date('2022-06-01'), dt_fim: new Date('2023-06-01'), cod_plano: 6 }, });
      await prisma.seguro.create({ data: { cod_seguro: 7, cod_cliente: 7, dt_inicio: new Date('2022-07-01'), dt_fim: new Date('2023-07-01'), cod_plano: 7 }, });
      await prisma.seguro.create({ data: { cod_seguro: 8, cod_cliente: 8, dt_inicio: new Date('2022-08-01'), dt_fim: new Date('2023-08-01'), cod_plano: 8 }, });
      await prisma.seguro.create({ data: { cod_seguro: 9, cod_cliente: 9, dt_inicio: new Date('2022-09-01'), dt_fim: new Date('2023-09-01'), cod_plano: 9 }, });
      await prisma.seguro.create({ data: { cod_seguro: 10, cod_cliente: 10, dt_inicio: new Date('2022-10-01'), dt_fim: new Date('2023-10-01'), cod_plano: 10 } });

      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 1, desc_sinistro: 'Roubo' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 2, desc_sinistro: 'Furto' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 3, desc_sinistro: 'Dano Acidental' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 4, desc_sinistro: 'Perda' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 5, desc_sinistro: 'Dano por Água' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 6, desc_sinistro: 'Queda' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 7, desc_sinistro: 'Incêndio' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 8, desc_sinistro: 'Dano Elétrico' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 9, desc_sinistro: 'Desgaste' } });
      await prisma.tipo_sinistro.create({ data: { tp_sinistro: 10, desc_sinistro: 'Defeito de Fábrica' }});

      await prisma.sinistro.create({ data: { cod_sinistro: 1, cod_dispositivo: 1, tp_sinistro: 1, dt_sinistro: new Date('2023-10-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 2, cod_dispositivo: 2, tp_sinistro: 2, dt_sinistro: new Date('2022-06-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 3, cod_dispositivo: 3, tp_sinistro: 3, dt_sinistro: new Date('2022-07-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 4, cod_dispositivo: 4, tp_sinistro: 1, dt_sinistro: new Date('2022-08-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 5, cod_dispositivo: 5, tp_sinistro: 2, dt_sinistro: new Date('2022-09-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 6, cod_dispositivo: 6, tp_sinistro: 3, dt_sinistro: new Date('2022-10-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 7, cod_dispositivo: 7, tp_sinistro: 1, dt_sinistro: new Date('2022-11-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 8, cod_dispositivo: 8, tp_sinistro: 2, dt_sinistro: new Date('2022-12-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 9, cod_dispositivo: 9, tp_sinistro: 3, dt_sinistro: new Date('2023-01-01') }, });
      await prisma.sinistro.create({ data: { cod_sinistro: 10, cod_dispositivo: 10, tp_sinistro: 1, dt_sinistro: new Date('2023-02-01') } });


      return res.send("Tabela populada com sucesso!")
    } catch (error) {
      return res.send(error)
    }
  }

  public async validarDados(req: Request, res: Response) {
    const clientes = await prisma.cliente.findMany();
    const modelos = await prisma.modelo.findMany();
    const marcas = await prisma.marca.findMany();
    const dispositivos = await prisma.dispositivo.findMany();
    const planos = await prisma.plano.findMany();
    const seguros = await prisma.seguro.findMany();
    const tiposSinistro = await prisma.tipo_sinistro.findMany();
    const sinistros = await prisma.sinistro.findMany();

    const data = {
      clientes,
      modelos,
      marcas,
      dispositivos,
      planos,
      seguros,
      tiposSinistro,
      sinistros
    }
    
    return res.send(data)
  }
}

export default new ComandoDML();