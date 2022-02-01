/* eslint-disable no-unused-vars */
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
    add(a: Float!, b: Float!): Float!
    greeting(name: String, position: String): String!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// ==> Resolvers - onde declaramos funções relacionadas ao nosso schema
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      return args.a + args.b;
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Olá, ${args.name}! Você mora no ${args.position}`;
      } else {
        return 'Olá, Developer!';
      }
    },
    me() {
      return {
        id: '3232klkl',
        name: 'Glaucia Lemos',
        email: 'glaucia@example.com',
        age: 35
      }
    },
    post() {
      return {
        id: '898ewew',
        title: 'Clean Code',
        body: 'A Handbook of Agile Software Craftsmanshipring',
        published: true
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('Server is now up and running at http://localhost:4000')
});