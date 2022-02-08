/**
 * file: src/graphql/index.js
 * description: file responsible to execute the Apollo Server Express package. Including
 * also (resolvers/typedefs) and db.
 * date: 02/07/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ApolloServer } from 'apollo-server-express';
import { env } from '../config/environment/index';
import db from '../data/db';
import schema from './schema';


const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
  context: {
    db: db,
  },
});

export default apolloServer;