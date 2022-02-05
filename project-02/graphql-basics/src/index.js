/* eslint-disable no-unused-vars */
/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { GraphQLServer } from 'graphql-yoga';
import db from './data/db';
import schema from './graphql/schema';

const server = new GraphQLServer({
  schema,
  context: {
    db: db,
  },
});

server.start(() => {
  console.log('Server is now up and running at http://localhost:4000');
});
