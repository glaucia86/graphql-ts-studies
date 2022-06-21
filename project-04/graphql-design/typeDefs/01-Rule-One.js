// Rule #1: Always start with a high-level view of the objects
// and their relationships before you deal with specific fields.

const { ApolloServer, gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String!
    car(id: ID!): Car!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  interface Group {
    Image
    [GroupMembership]
  }

  type ManualGroup implements Group {
    Image
    [GroupMembership]
  }

  type AutomaticGroup implements Group {
    Image
    [GroupMembership]
    [AutomaticGroupFeatures]
  }

  type AutomaticGroupFeatures {}

  type GroupMembership {
    Group
    Car
  }
`;
