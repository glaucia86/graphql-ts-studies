/* eslint-disable no-unused-vars */
/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { GraphQLServer } from 'graphql-yoga';

// ==> Simulating a Database (demo purposes)
const users = [{
  id: '1',
  name: 'Glaucia Lemos',
  email: 'glaucia@example.com',
  age: 35
}, {
  id: '2',
  name: 'Jurema Lemos',
  email: 'jurema@example.com',
}, {
  id: '3',
  name: 'Prince',
  email: 'prince@example.com',
}];

const posts = [{
  id: '1',
  title: 'Learn JavaScript',
  body: 'Become a Ninja in JavaScript in few months',
  published: true,
  author: '1'
}, {
  id: '2',
  title: 'Learn TypeScript',
  body: 'Become a Ninja in TypeScript in few months',
  published: false,
  author: '1'
}, {
  id: '3',
  title: 'Learn Node.Js',
  body: 'Become a Ninja in Node in few months',
  published: true,
  author: '2'
}];

const comments = [{
  id: '1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  author: '1',
  post: '3'
}, {
  id: '2',
  text: 'Integer efficitur sit amet justo ut viverra. Donec id sem nisi.',
  author: '1',
  post: '3'
}, {
  id: '3',
  text: 'Aliquam condimentum diam lectus.',
  author: '3',
  post: '2'
}, {
  id: '4',
  text: 'Nulla consectetur finibus lobortis. Praesent malesuada nibh eu congue faucibus.',
  author: '2',
  post: '1'
}]

// ==> Type Definitions (schema) - onde definimos o nosso schema
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`;

// ==> Resolvers - onde declaramos funções relacionadas ao nosso schema
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

        return isTitleMatch || isBodyMatch;
      });
    },
    comments(parent, args, ctx, info) {
      return comments;
    },
    me() {
      return {
        id: '3232klkl',
        name: 'Glaucia Lemos',
        email: 'glaucia@example.com',
        age: 35
      }
    },
    post() {
      return {
        id: '898ewew',
        title: 'Clean Code',
        body: 'A Handbook of Agile Software Craftsmanshipring',
        published: true
      }
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      //==> Relationship btw User -> Post
      return users.find((user => user.id === parent.author));
    },
    comments(parent, args, ctx, info) {
      //==> Relationship btw Comment -> Post
      return comments.filter((comment => comment.post === parent.id));
    }
  },
  Comment: {
    //==> Relationship btw User -> Comment
    author(parent, args, ctx, info) {
      return users.find((user => user.id === parent.author));
    },
    post(parent, args, ctx, info) {
      //==> Relationship btw Post -> Comment
      return posts.find((post => post.id === parent.post));
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      //==> Relationship btw Post -> User
      return posts.filter((post => post.author === parent.id));
    },
    comments(parent, args, ctx, info) {
      //==> Relationship btw Comment -> User
      return comments.filter((comment => comment.author === parent.id));
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('Server is now up and running at http://localhost:4000');
});