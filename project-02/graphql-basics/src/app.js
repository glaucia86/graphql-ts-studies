/**
 * file: src/app.js
 * description: file responsible for making the connection with the (src/server.js) file
 * date: 02/07/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express from 'express';
import graphqlServer from './graphql';

const app = express();

graphqlServer.applyMiddleware({
  app,
});

export default app;