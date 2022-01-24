/**
 * file: src/index.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { ApolloServer, gql } = require('apollo-server');
const sessions = require('./data/sessions.json');

const typeDefs = gql`
type Query {
  sessions: [Session]
}
  type Session {
    id: ID!,
    title: String!,
    description: String,
    startAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String
  }`

const resolvers = {
  Query: {
    sessions: () => {
      return sessions;
    }
  }
}
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => {
    console.log(`GraphQL is running on ${url}`);
  });