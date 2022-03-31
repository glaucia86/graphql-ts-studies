/**
 * file: src/index.js
 * description: file responsible to execute the application.
 * date: 02/16/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/typeDefs/schema');
const { Query } = require("./graphql/resolvers/Query");
const { Mutation } = require("./graphql/resolvers/Mutation");
const { Product } = require("./graphql/resolvers/Product");
const { Category } = require("./graphql/resolvers/Category");
const { categories, products, reviews } = require('./data/db');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation
  },
  context: {
    categories,
    products,
    reviews
  }
});

server.listen().then(({ url }) => {
  console.log('Server is running at...: ' + url);
});

