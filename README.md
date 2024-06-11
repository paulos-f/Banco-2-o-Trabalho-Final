# Banco-2-o-Trabalho-Final.
Este repositório é para conter as informações de criação e atualização do projeto de final de semestre de Banco de Dados II. 

## Integrantes do Grupo ( github )
	kaiquedm12
 	paulos-f
	GeovaneVDS
 	JogadorZero
  	AndreLuizOenning
	BrunoAiolfi

## Desenvolvimento inicial do projeto:
### 04/06/2024

tabelas:
	
	pessoas
		nome,
		cpf PK,
		sexo,
		data nasc
		endereço	

	
	clientes
		FK PESSOA
		id PK
		data de cadastro
		numero contato
		email contato
	
	dispositivo
		id PK
		FK MODELO
		FK CLIENTE
		numero	
	
	modelo
		id PK
		nome
		FK MARCA
	
	marca 
		id PK
		nome
		
	apolice (seguro)
		id pk
		FK CLIENTE
		FK APOLICE_TIPO_APOLICE
		data criação
		data fim
		fk valor 
	
	apolice_tipo_apolice
		id pk
		fk apolice
		fk tipo apolice
	
	tipo apolice (tipo seguro)
		id pk
		fk tipo sinistro
		desc
	
	valor
		id
		valor
		fk apolice
	
	sinistro 
		id pk
		desc
		fk cliente
		fk dispositivo
	
	sinistro_tipo_sinistro
		id pk
		fk tipo sinistro
		fk sinistro
	
	tipo sinistro
		id pk
		desc 


### 11/06/2024

termino das tabelas:

	
	Table pessoa {
	  cpf varchar(11) [primary key]
	  nome varchar(50)
	  sexo char
	  dt_nascimento date
	}
	
	Table cliente {
	  cod_cliente integer [primary key]
	  cpf varchar(11)
	  dt_cadastro date
	  num_contato varchar(13)
	  email varchar(100)
	  endereco varchar(100)
	}
	
	Table modelo{
	  cod_modelo integer [primary key]
	  nm_modelo varchar(25)
	  nm_marca varchar(15)
	}
	
	Table dispositivo {
	  cod_dispositivo integer [primary key]
	  cod_modelo integer
	  cod_cliente integer
	}
	
	table plano{
	  cod_plano integer [primary key]
	  desc_plano varchar(100)
	  valor float
	}
	
	table seguro{
	  cod_seguro integer [primary key]
	  cod_cliente integer
	  dt_inicio date
	  dt_fim date
	  cod_plano integer
	}
	
	table sinistro{
	  cod_sinistro integer [primary key]
	  cod_dispositivo integer
	  dt_sinistro date
	  tp_sinistro varchar(100)
	}
	
	table avaliacao{
	  cod_avaliacao integer [primary key]
	  cod_sinistro intereger
	  desc_avaliacao varchar(200)
	  status varchar(10)
	}
	
	ref: pessoa.cpf > cliente.cpf
	Ref: cliente.cod_cliente > dispositivo.cod_cliente 
	ref: modelo.cod_modelo > dispositivo.cod_modelo
	ref: dispositivo.cod_dispositivo > sinistro.cod_dispositivo
	ref: sinistro.cod_sinistro > avaliacao.cod_sinistro
	ref: cliente.cod_cliente > seguro.cod_cliente
	ref: plano.cod_plano > seguro.cod_plano

![Alt text](modelo_fisico.png)
