/**
 * file: src/index.js
 * description: file responsible for connecting to the 'server.js' file
 * date: 01/23/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { ApolloServer, ApolloError } = require('apollo-server');
const SessionAPI = require('./data-sources/sessions');
const SpeakerAPI = require('./data-sources/speakers');

const typeDefs = require('./schema/session-schema');
const resolvers = require('./resolvers/resolvers');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: false,
  formatError: (err) => {
    if (err.extensions.code === 'INTERNAL_SERVER_ERROR') {
      return new ApolloError('We are having some trouble', 'ERROR', {
        token: 'uniquetoken',
      });
    }
    return err;
  },
});

server.listen().then(({ url }) => {
  console.log(`GraphQL is running on ${url}`);
});
