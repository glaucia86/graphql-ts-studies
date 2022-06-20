const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type Group {
    id: ID!
    features: [GroupFeatures!]!
    applyFeaturesSeperately: Boolean!
    cars: [Car!]!
    name: String!
    imageId: ID!
    bodyHtml: String!
  }

  type GroupFeatures {
    feature: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      cars: () => [{ id: 1, color: 'blue', make: 'Toyota' }],
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
