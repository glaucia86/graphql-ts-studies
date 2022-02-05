/* eslint-disable no-unused-vars */
/**
 * file: src/index.js
 * description: file responsible for connecting to the 'index.js' file
 * date: 01/30/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { GraphQLServer } from 'graphql-yoga';
import { v4 as uuidv4 } from 'uuid';
import db from './data/db';

// ==> Resolvers - onde declaramos funções relacionadas ao nosso schema
const resolvers = {
  Query: {
    users(parent, args, { db }, info) {
      if (!args.query) {
        return db.users;
      }

      return db.users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, { db }, info) {
      if (!args.query) {
        return db.posts;
      }

      return db.posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

        return isTitleMatch || isBodyMatch;
      });
    },
    comments(parent, args, { db }, info) {
      return db.comments;
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
    createUser(parent, args, { db }, info) {
      const emailTaken = db.users.some((user) => user.email === args.data.email);

      if (emailTaken) {
        throw new Error('Email taken');
      }

      const user = {
        id: uuidv4(),
        ...args.data
      }

      db.users.push(user);
      return user;
    },
    createPost(parent, args, { db }, info) {
      const userExists = db.users.some((user) => user.id === args.data.author);

      if (!userExists) {
        throw new Error('User not found.');
      }

      const post = {
        id: uuidv4(),
        ...args.data
      }

      db.posts.push(post);
      return post;
    },
    createComment(parent, args, { db }, info) {
      const userExists = db.users.some((user) => user.id === args.data.author);
      const postExists = db.posts.some((post) => post.id === args.data.post && post.published);

      if(!userExists || !postExists) {
        throw new Error('Unable to find User and Post.')
      }

      const comment = {
        id: uuidv4(),
        ...args.data
      }

      db.comments.push(comment);
      return comment;
    },
    deleteUser(parent, args, { db }, info) {
      const userIndex = db.users.findIndex((user) => user.id === args.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }

      const deletedUsers = db.users.splice(userIndex, 1);

      db.posts = db.posts.filter((post) => {
        const match = post.author === args.id;

        if (match) {
          db.comments = db.comments.filter((comment) => comment.post !== post.id);
        }

        return !match;
      });

      db.comments = db.comments.filter((comment) => comment.author !== args.id);

      return deletedUsers[0];
    },
    deletePost(parent, args, { db }, info) {
      const postIndex = db.posts.findIndex((post) => post.id === args.id);

      if (postIndex === -1) {
        throw new Error('Post not found');
      }

      const deletedPosts = db.posts.splice(postIndex, 1);

      db.comments = db.comments.filter((comment) => comment.post !== args.id)

      return deletedPosts[0];
    },
    deleteComment(parent, args, { db }, info) {
      // author: User! post: Post!
      const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);

      if (commentIndex === -1) {
        throw new Error('Comment not found');
      }

      const deletedComments = db.comments.splice(commentIndex, 1);

      return deletedComments[0];
    }
  },
  Post: {
    author(parent, args, { db }, info) {
      //==> Relationship btw User -> Post
      return db.users.find((user => user.id === parent.author));
    },
    comments(parent, args, { db }, info) {
      //==> Relationship btw Comment -> Post
      return db.comments.filter((comment => comment.post === parent.id));
    }
  },
  Comment: {
    //==> Relationship btw User -> Comment
    author(parent, args, { db }, info) {
      return db.users.find((user => user.id === parent.author));
    },
    post(parent, args, { db }, info) {
      //==> Relationship btw Post -> Comment
      return db.posts.find((post => post.id === parent.post));
    }
  },
  User: {
    posts(parent, args, { db }, info) {
      //==> Relationship btw Post -> User
      return db.posts.filter((post => post.author === parent.id));
    },
    comments(parent, args, { db }, info) {
      //==> Relationship btw Comment -> User
      return db.comments.filter((comment => comment.author === parent.id));
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
  context: {
    db: db
  }
});

server.start(() => {
  console.log('Server is now up and running at http://localhost:4000');
});