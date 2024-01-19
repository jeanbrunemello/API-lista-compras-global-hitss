# API LISTA DE COMPRAS

Este projeto é um desafio técnico para admissão na empresa Global Hitss, que visa fornecer ao usuário uma aplicação simples de cadastramento, edição, visualização e deleção de listas de compras.

## REQUISITOS

Este projeto teve seu front-end construído em React e back-end construído em nodeJs, que devem ser rodados em conjunto.

Para isso, é necessário ter o nodeJS instalado, que pode ser baixado em (https://nodejs.org/).

Também é necessário instalar o Node Package Manager. Isso pode ser feito com a linha de comando `npm i npm`.

## DEPENDENCIAS
O projeto usa bibliotecas adicionas para modelar banco de dados, rodar migrations e seeds, preparar variaveis de ambiente e realizar roteamentos e configurar politica de CORS. 

Para instalar as respectivas bibliotecas, utilizar os comandos a seguir:
NPX: `npm i npx`
Express: `npm install pg express`
PG: `npm install pg`
Sequelize: `npm i sequelize`
Sequelize CLI: `npm install -g sequelize-cli`
CORS: `npm install cors`

## BANCO DE DADOS

A API está configurada para se conectar ao banco de dados de nome "lista-compras-global-hitss", mas pode ser que a senha precise ser configurada.

As variaveis de ambiente se encontram em config/config.json, e dvem ser alteradas conforme a necessidade.

## MIGRATIONS

Uma vez configurada a conexão com o banco e criado o schema, as tabelas e entidades podem ser subidas com a execução do comando `npx sequelize-cli db:migrate`.

Para reverter a migration, basta rodar `npx sequelize-cli db:migrate:undo`.

É possível popular o banco de dados com dados com o comando `npx sequelize db:seed:all`, que rodará a inclusão de alguns dados automaticamente.

## EXECUÇÃO

Para rodar o back-end, abrir a pasta do projeto e executar a linha de comando `node index.js`.

O servidor rodará na porta 3000.

