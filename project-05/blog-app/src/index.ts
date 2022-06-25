/**
 * file: src/index.ts
 * description: file responsible to execute the application.
 * date: 06/24/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { Query } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  }
});

server.listen().then(({ url }) => {
  console.log(`Server executing on ${url}`)
});