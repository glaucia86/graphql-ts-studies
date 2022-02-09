/**
 * file: index.js
 * description: file responsible to execute the application.
 * date: 02/04/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express from 'express';
import http from 'http';
import { port } from './config/environment/index';
import server from './graphql';

const app = express();

const httpServer = http.createServer(app);

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, ()  => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});


