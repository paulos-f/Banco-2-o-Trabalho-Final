# Banco-2-o-Trabalho-Final.
Este repositório é para conter as informações de criação e atualização do projeto de final de semestre de Banco de Dados II. 

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
