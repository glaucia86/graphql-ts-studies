/**
 * file: src/index.js
 * description: file responsible to execute the application.
 * date: 02/16/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello:() => {
      return 'Hi, Developers!'
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server is running at...: ' + url);
});

