/**
 * file: src/index.js
 * description: file responsible to execute the application.
 * date: 02/16/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./graphql/typeDefs/schema');
const { Query } = require("./graphql/resolvers/Query");
const { Product } = require("./graphql/resolvers/Product");
const { Category } = require("./graphql/resolvers/Category");
const { categories, products } = require('./data/db');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category
  },
  context: {
    categories,
    products
  }
});

server.listen().then(({ url }) => {
  console.log('Server is running at...: ' + url);
});

