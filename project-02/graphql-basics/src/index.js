/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { ApolloServer } from 'apollo-server';
import db from './data/db';
import schema from './graphql/schema';

const server = new ApolloServer({
  schema,
  context: {
    db: db,
  },
});

server.listen().then(({ url }) => {
  console.log(url);
});

