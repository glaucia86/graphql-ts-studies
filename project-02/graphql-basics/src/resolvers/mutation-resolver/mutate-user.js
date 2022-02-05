/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/mutation-resolver/mutate-user.js
 * description: file responsible for the 'CRUD' related with Mutate User.
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { v4 as uuidv4 } from 'uuid';

const createUser = (parent, args, { db }, info) => {
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
};

const deleteUser = (parent, args, { db }, info) => {
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
};

const updateUser = (parent, args, { db }, info) => {
  const { id, data } = args;
  const user = db.users.find((user) => user.id === id);

  if(!user) {
    throw new Error('User not found');
  }

  if (typeof data.email === 'string') {
    const emailTaken = db.users.some((user) => user.email === data.email);

    if (emailTaken) {
      throw new Error('Email taken');
    }

    user.email = data.email;
  }

  if (typeof data.name === 'string') {
    user.name = data.name;
  }

  if (typeof data.age !== 'undefined') {
    user.age = data.age;
  }

  return user;
};

export {
  createUser,
  deleteUser,
  updateUser,
}