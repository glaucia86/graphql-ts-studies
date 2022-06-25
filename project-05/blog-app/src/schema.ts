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
`