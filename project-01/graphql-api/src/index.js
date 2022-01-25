/**
 * file: src/index.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { ApolloServer } = require('apollo-server');
const SessionAPI = require('./data-sources/sessions');

const typeDefs = require('./schema/session-schema');
const resolvers = require('./resolvers/resolvers');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`GraphQL is running on ${url}`);
});
