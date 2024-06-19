import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ComandoDML {
    public async popularBanco(req: Request, res: Response) {
        try {
            await prisma.$queryRawUnsafe(`
            await prisma.cliente.createMany({
              data: [
                { cod_cliente: 1, cpf: '12345678901', nome: 'João da Silva', sexo: 'M', dt_nascimento: new Date('1980-01-15'), dt_cadastro: new Date('2022-01-01'), num_contato: '11987654321', email: 'joao.silva@gmail.com', endereco: 'Rua A, 123' },
                { cod_cliente: 2, cpf: '23456789012', nome: 'Maria Oliveira', sexo: 'F', dt_nascimento: new Date('1990-02-20'), dt_cadastro: new Date('2022-02-01'), num_contato: '21987654321', email: 'maria.oliveira@gmail.com', endereco: 'Rua B, 456' },
                { cod_cliente: 3, cpf: '34567890123', nome: 'Carlos Pereira', sexo: 'M', dt_nascimento: new Date('1985-03-25'), dt_cadastro: new Date('2022-03-01'), num_contato: '31987654321', email: 'carlos.pereira@gmail.com', endereco: 'Rua C, 789' },
                { cod_cliente: 4, cpf: '45678901234', nome: 'Ana Souza', sexo: 'F', dt_nascimento: new Date('1995-04-30'), dt_cadastro: new Date('2022-04-01'), num_contato: '41987654321', email: 'ana.souza@gmail.com', endereco: 'Rua D, 101' },
                { cod_cliente: 5, cpf: '56789012345', nome: 'Paulo Lima', sexo: 'M', dt_nascimento: new Date('1988-05-10'), dt_cadastro: new Date('2022-05-01'), num_contato: '51987654321', email: 'paulo.lima@gmail.com', endereco: 'Rua E, 202' },
                { cod_cliente: 6, cpf: '67890123456', nome: 'Fernanda Santos', sexo: 'F', dt_nascimento: new Date('1992-06-15'), dt_cadastro: new Date('2022-06-01'), num_contato: '61987654321', email: 'fernanda.santos@gmail.com', endereco: 'Rua F, 303' },
                { cod_cliente: 7, cpf: '78901234567', nome: 'Ricardo Gomes', sexo: 'M', dt_nascimento: new Date('1983-07-20'), dt_cadastro: new Date('2022-07-01'), num_contato: '71987654321', email: 'ricardo.gomes@gmail.com', endereco: 'Rua G, 404' },
                { cod_cliente: 8, cpf: '89012345678', nome: 'Juliana Costa', sexo: 'F', dt_nascimento: new Date('1987-08-25'), dt_cadastro: new Date('2022-08-01'), num_contato: '81987654321', email: 'juliana.costa@gmail.com', endereco: 'Rua H, 505' },
                { cod_cliente: 9, cpf: '90123456789', nome: 'Marcos Alves', sexo: 'M', dt_nascimento: new Date('1981-09-30'), dt_cadastro: new Date('2022-09-01'), num_contato: '91987654321', email: 'marcos.alves@gmail.com', endereco: 'Rua I, 606' },
                { cod_cliente: 10, cpf: '01234567890', nome: 'Bianca Machado', sexo: 'F', dt_nascimento: new Date('1993-10-05'), dt_cadastro: new Date('2022-10-01'), num_contato: '01987654321', email: 'bianca.machado@gmail.com', endereco: 'Rua J, 707' }
              ]
            });
            
            await prisma.modelo.createMany({
              data: [
                { cod_modelo: 1, nm_modelo: 'Galaxy S21' },
                { cod_modelo: 2, nm_modelo: 'iPhone 12' },
                { cod_modelo: 3, nm_modelo: 'Moto G8' },
                { cod_modelo: 4, nm_modelo: 'Xperia 5' },
                { cod_modelo: 5, nm_modelo: 'Galaxy S20' },
                { cod_modelo: 6, nm_modelo: 'iPhone 11' },
                { cod_modelo: 7, nm_modelo: 'Moto G7' },
                { cod_modelo: 8, nm_modelo: 'Xperia 4' },
                { cod_modelo: 9, nm_modelo: 'Galaxy S10' },
                { cod_modelo: 10, nm_modelo: 'iPhone X' }
              ]
            });
            
            await prisma.marca.createMany({
              data: [
                { cod_marca: 1, cod_modelo: 1, nm_marca: 'Samsung' },
                { cod_marca: 2, cod_modelo: 2, nm_marca: 'Apple' },
                { cod_marca: 3, cod_modelo: 3, nm_marca: 'Motorola' },
                { cod_marca: 4, cod_modelo: 4, nm_marca: 'Sony' },
                { cod_marca: 5, cod_modelo: 5, nm_marca: 'Samsung' },
                { cod_marca: 6, cod_modelo: 6, nm_marca: 'Apple' },
                { cod_marca: 7, cod_modelo: 7, nm_marca: 'Motorola' },
                { cod_marca: 8, cod_modelo: 8, nm_marca: 'Sony' },
                { cod_marca: 9, cod_modelo: 9, nm_marca: 'Samsung' },
                { cod_marca: 10, cod_modelo: 10, nm_marca: 'Apple' }
              ]
            });
            
            await prisma.dispositivo.createMany({
              data: [
                { cod_dispositivo: 1, cod_modelo: 1, cod_cliente: 1 },
                { cod_dispositivo: 2, cod_modelo: 2, cod_cliente: 2 },
                { cod_dispositivo: 3, cod_modelo: 3, cod_cliente: 3 },
                { cod_dispositivo: 4, cod_modelo: 4, cod_cliente: 4 },
                { cod_dispositivo: 5, cod_modelo: 5, cod_cliente: 5 },
                { cod_dispositivo: 6, cod_modelo: 6, cod_cliente: 6 },
                { cod_dispositivo: 7, cod_modelo: 7, cod_cliente: 7 },
                { cod_dispositivo: 8, cod_modelo: 8, cod_cliente: 8 },
                { cod_dispositivo: 9, cod_modelo: 9, cod_cliente: 9 },
                { cod_dispositivo: 10, cod_modelo: 10, cod_cliente: 10 }
              ]
            });
            
            await prisma.plano.createMany({
              data: [
                { cod_plano: 1, desc_plano: 'Plano Básico', valor: 29.99 },
                { cod_plano: 2, desc_plano: 'Plano Intermediário', valor: 49.99 },
                { cod_plano: 3, desc_plano: 'Plano Avançado', valor: 69.99 },
                { cod_plano: 4, desc_plano: 'Plano Premium', valor: 89.99 },
                { cod_plano: 5, desc_plano: 'Plano Família', valor: 109.99 },
                { cod_plano: 6, desc_plano: 'Plano Corporativo', valor: 199.99 },
                { cod_plano: 7, desc_plano: 'Plano Estudante', valor: 19.99 },
                { cod_plano: 8, desc_plano: 'Plano Jovem', valor: 39.99 },
                { cod_plano: 9, desc_plano: 'Plano Sênior', valor: 59.99 },
                { cod_plano: 10, desc_plano: 'Plano Completo', valor: 79.99 }
              ]
            });
            
            await prisma.seguro.createMany({
              data: [
                { cod_seguro: 1, cod_cliente: 1, dt_inicio: new Date('2022-01-01'), dt_fim: new Date('2023-01-01'), cod_plano: 1 },
                { cod_seguro: 2, cod_cliente: 2, dt_inicio: new Date('2022-02-01'), dt_fim: new Date('2023-02-01'), cod_plano: 2 },
                { cod_seguro: 3, cod_cliente: 3, dt_inicio: new Date('2022-03-01'), dt_fim: new Date('2023-03-01'), cod_plano: 3 },
                { cod_seguro: 4, cod_cliente: 4, dt_inicio: new Date('2022-04-01'), dt_fim: new Date('2023-04-01'), cod_plano: 4 },
                { cod_seguro: 5, cod_cliente: 5, dt_inicio: new Date('2022-05-01'), dt_fim: new Date('2023-05-01'), cod_plano: 5 },
                { cod_seguro: 6, cod_cliente: 6, dt_inicio: new Date('2022-06-01'), dt_fim: new Date('2023-06-01'), cod_plano: 6 },
                { cod_seguro: 7, cod_cliente: 7, dt_inicio: new Date('2022-07-01'), dt_fim: new Date('2023-07-01'), cod_plano: 7 },
                { cod_seguro: 8, cod_cliente: 8, dt_inicio: new Date('2022-08-01'), dt_fim: new Date('2023-08-01'), cod_plano: 8 },
                { cod_seguro: 9, cod_cliente: 9, dt_inicio: new Date('2022-09-01'), dt_fim: new Date('2023-09-01'), cod_plano: 9 },
                { cod_seguro: 10, cod_cliente: 10, dt_inicio: new Date('2022-10-01'), dt_fim: new Date('2023-10-01'), cod_plano: 10 }
              ]
            });
            
            await prisma.tipo_sinistro.createMany({
              data: [
                { tp_sinistro: 1, desc_sinistro: 'Roubo' },
                { tp_sinistro: 2, desc_sinistro: 'Furto' },
                { tp_sinistro: 3, desc_sinistro: 'Dano Acidental' },
                { tp_sinistro: 4, desc_sinistro: 'Perda' },
                { tp_sinistro: 5, desc_sinistro: 'Dano por Água' },
                { tp_sinistro: 6, desc_sinistro: 'Queda' },
                { tp_sinistro: 7, desc_sinistro: 'Incêndio' },
                { tp_sinistro: 8, desc_sinistro: 'Dano Elétrico' },
                { tp_sinistro: 9, desc_sinistro: 'Desgaste' },
                { tp_sinistro: 10, desc_sinistro: 'Defeito de Fábrica' }
              ]
            });
            
            await prisma.sinistro.createMany({
              data: [
                { cod_sinistro: 1, cod_dispositivo: 1, tp_sinistro: 1, dt_sinistro: new Date('2022-05-01') },
                { cod_sinistro: 2, cod_dispositivo: 2, tp_sinistro: 2, dt_sinistro: new Date('2022-06-01') },
                { cod_sinistro: 3, cod_dispositivo: 3, tp_sinistro: 3, dt_sinistro: new Date('2022-07-01') },
                { cod_sinistro: 4, cod_dispositivo: 4, tp_sinistro: 1, dt_sinistro: new Date('2022-08-01') },
                { cod_sinistro: 5, cod_dispositivo: 5, tp_sinistro: 2, dt_sinistro: new Date('2022-09-01') },
                { cod_sinistro: 6, cod_dispositivo: 6, tp_sinistro: 3, dt_sinistro: new Date('2022-10-01') },
                { cod_sinistro: 7, cod_dispositivo: 7, tp_sinistro: 1, dt_sinistro: new Date('2022-11-01') },
                { cod_sinistro: 8, cod_dispositivo: 8, tp_sinistro: 2, dt_sinistro: new Date('2022-12-01') },
                { cod_sinistro: 9, cod_dispositivo: 9, tp_sinistro: 3, dt_sinistro: new Date('2023-01-01') },
                { cod_sinistro: 10, cod_dispositivo: 10, tp_sinistro: 1, dt_sinistro: new Date('2023-02-01') }
              ]
            });            
            `);

            return res.send("Tabela populada com sucesso!")
        } catch (error) {
            return res.send(error)
        }
    }

    public async limparBanco(req: Request, res: Response) {
        try {
            await prisma.cliente.deleteMany({
                where: {}
            });

            await prisma.modelo.delete({
                where: {}
            })

            await prisma.marca.delete({
                where: {}
            })

            await prisma.dispositivo.delete({
                where: {}
            })

            await prisma.plano.delete({
                where: {}
            })

            await prisma.seguro.delete({
                where: {}
            })

            await prisma.tipo_sinistro.delete({
                where: {}
            })

            await prisma.sinistro.delete({
                where: {}
            })
            
            res.send("Dados do banco limpos com sucesso!")
        } catch (error) {
            res.send(error)
        }
    }

    public async teste(req: Request, res: Response) {
        const data = await prisma.$queryRawUnsafe(`
            select * from cliente;
        `);
        return res.send(data)
    }
}

export default new ComandoDML();