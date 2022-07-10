/**
 * file: src/schema.ts
 * description: file responsible for GraphQL Schemas in the application.
 * date: 06/24/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    createdAt: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    posts: [Post!]!
    profile: Profile!
  }

  type Profile {
    id: ID!
    bio: String!
    user: User!
  }

`;