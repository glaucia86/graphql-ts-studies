/**
 * file: src/index.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./data-source/sessions');

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
    track: String @deprecated(reason: "Too many session do not fit into a sigle track."),
    level: String
  }`

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.SessionAPI.getSessions();
    }
  }
};

const dataSources = () => ({
  SessionAPI: new SessionAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
  .listen()
  .then(({ url }) => {
    console.log(`GraphQL is running on ${url}`);
  });