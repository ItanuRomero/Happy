import express from 'express';
// express eh um framework em node.js que ajuda a gente a lidar com 
// requisicoes e respostas de uma maneira mais simples

import path from 'path'

// o cors vai deixar a gente acessar a api mesmo de fora do dominio
import cors from 'cors';

// para deixar de possuir erros com async
import 'express-async-errors';

// conectando com banco de dados
import './database/connection';

// importando rotas
import routes from './routes';

// gerenciador de erros
import errorHandler from "./errors/handler";

const app = express();

// adicionando o cors
app.use(cors())

// para poder utilizar o json no express
app.use(express.json());

// usando as rotas
app.use(routes);

// para mostrar imagens no navegador
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

// usando o gerenciador de erros
app.use(errorHandler);


// rota = conjunto
// recurso = usuario

// metodos http = GET, POST, PUT, DELETE
// parametros

// get - buscando uma informacao (lista, item, etc)
// post - criando uma informacao nova
// put - editando uma informacao
// delete - deletando uma informacao

// query params - busca, filtro, etc = http://localhost:3333/users?search=itanu
// Route params - identifica um recurso = http://localhost:3333/users/1 
// body -  identificar um recurso = http://localhost:3333/users

app.listen(3333);
// conseguimos agora encontrar nossa aplicacao em localhost:3333

// existem tres formas de lidar com banco de dados:
// driver nativo, query builder, ORM (object relational mapping)

