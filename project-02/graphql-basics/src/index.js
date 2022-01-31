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
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`;

// ==> Resolvers - onde declaramos funções relacionadas ao nosso schema
const resolvers = {
  Query: {
    title() {
      return 'MacBook Air Pro'
    },
    price() {
      return 1999.90
    },
    releaseYear() {
      return 2022
    },
    rating() {
      return 4.9
    },
    inStock() {
      return true
    },
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is running!');
});