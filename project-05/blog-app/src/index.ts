/**
 * file: src/index.ts
 * description: file responsible to execute the application.
 * date: 06/24/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { Query } from './resolvers';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
  context: {
    prisma
  }
});

server.listen().then(({ url }) => {
  console.log(`Server executing on ${url}`)
});