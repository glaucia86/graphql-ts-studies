/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { GraphQLServer } from 'graphql-yoga';

// ==> Type Definitions (schema) - onde definimos o nosso schema
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`;

// ==> Resolvers - onde declaramos funções relacionadas ao nosso schema
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query using GraphQL'
    },
    name() {
      return 'Glaucia Lemos'
    },
    location() {
      return 'Rio de Janeiro - Brazil'
    },
    bio() {
      return 'Cloud Advocate in JavaScript/TypeScript @ Microsoft'
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is running!');
});