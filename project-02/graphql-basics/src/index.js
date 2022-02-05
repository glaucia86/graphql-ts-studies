/* eslint-disable no-unused-vars */
/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { GraphQLServer } from 'graphql-yoga';
import { v4 as uuidv4 } from 'uuid';

// ==> Simulating a Database (demo purposes)
let users = [{
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

let posts = [{
  id: '1',
  title: 'Learn JavaScript',
  body: 'Become a Ninja in JavaScript in few months',
  published: true,
  author: '1'
}, {
  id: '2',
  title: 'Learn TypeScript',
  body: 'Become a Ninja in TypeScript in few months',
  published: true,
  author: '1'
}, {
  id: '3',
  title: 'Learn Node.Js',
  body: 'Become a Ninja in Node in few months',
  published: false,
  author: '2'
}];

let comments = [{
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

  type Mutation {
    createUser(data: CreateUserInput!): User!
    deleteUser(id: ID!): User!
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
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
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some((user) => user.email === args.data.email);

      if (emailTaken) {
        throw new Error('Email taken');
      }

      const user = {
        id: uuidv4(),
        ...args.data
      }

      users.push(user);
      return user;
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);

      if (!userExists) {
        throw new Error('User not found.');
      }

      const post = {
        id: uuidv4(),
        ...args.data
      }

      posts.push(post);
      return post;
    },
    createComment(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);
      const postExists = posts.some((post) => post.id === args.data.post && post.published);

      if(!userExists || !postExists) {
        throw new Error('Unable to find User and Post.')
      }

      const comment = {
        id: uuidv4(),
        ...args.data
      }

      comments.push(comment);
      return comment;
    },
    deleteUser(parent, args, ctx, info) {
      const userIndex = users.findIndex((user) => user.id === args.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }

      const deletedUsers = users.splice(userIndex, 1);

      posts = posts.filter((post) => {
        const match = post.author === args.id;

        if (match) {
          comments = comments.filter((comment) => comment.post !== post.id);
        }

        return !match;
      });

      comments = comments.filter((comment) => comment.author !== args.id);

      return deletedUsers[0];
    },
    deletePost(parent, args, ctx, info) {
      const postIndex = posts.findIndex((post) => post.id === args.id);

      if (postIndex === -1) {
        throw new Error('Post not found');
      }

      const deletedPosts = posts.splice(postIndex, 1);

      comments = comments.filter((comment) => comment.post !== args.id)

      return deletedPosts[0];
    },
    deleteComment(parent, args, ctx, info) {
      // author: User! post: Post!
      const commentIndex = comments.findIndex((comment) => comment.id === args.id);

      if (commentIndex === -1) {
        throw new Error('Comment not found');
      }

      const deletedComments = comments.splice(commentIndex, 1);

      return deletedComments[0];
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