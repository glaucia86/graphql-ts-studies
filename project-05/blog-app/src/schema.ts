/**
 * file: src/schema.ts
 * description: file responsible for GraphQL Schemas in the application.
 * date: 06/24/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    posts: [Post!]!
  }

  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID!, post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    signup(email: String!, name: String!, password: String!, bio: String!): UserPayload!
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

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }

  type UserPayload {
    userErrors: [UserError!]!
    user: User
  }

  input PostInput {
    title: String
    content: String
  }
`;