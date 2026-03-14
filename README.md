# API de Filmes

Este projeto foi desenvolvido como parte de um desafio de back-end.  
A ideia foi criar uma API simples para cadastrar e listar filmes, praticando conceitos básicos de Node.js e Express.

## Tecnologias utilizadas

- Node.js
- Express

## Como rodar o projeto

1. Clone o repositório:

git clone https://github.com/MatheusRozza7/API-de-filmes---desafio-backend.git

2. Entre na pasta do projeto:

cd API-de-filmes---desafio-backend

3. Instale as dependências:

npm install

4. Inicie o servidor:

node server.js

O servidor irá rodar em:

http://localhost:3000

## Rotas da API

Listar todos os filmes:

GET /filmes

Buscar um filme específico:

GET /filmes/:id

Cadastrar um novo filme:

POST /filmes

Exemplo de JSON para cadastro:

{
"titulo": "Matrix",
"diretor": "Wachowski",
"ano": 1999
}

Remover um filme:

DELETE /filmes/:id

## Testes

As rotas podem ser testadas usando o Postman ou curl no terminal.

## Observação

Este projeto foi criado para praticar conceitos básicos de desenvolvimento de APIs, como rotas, verbos HTTP e manipulação de dados.

## Matheus Rosa
