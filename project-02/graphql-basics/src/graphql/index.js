/**
 * file: src/graphql/index.js
 * description: file responsible to configure the Apollo Server Express.
 * date: 02/07/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ApolloServer, PubSub } from 'apollo-server-express';
import { env } from '../config/environment/index';
import db from '../data/db';
import schema from './schema';

const pubsub = new PubSub();

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
  context: {
    db: db,
    pubsub
  },
});

export default apolloServer;