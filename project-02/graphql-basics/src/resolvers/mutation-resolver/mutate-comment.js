/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/mutation-resolver/mutate-comment.js
 * description: file responsible for the 'CRUD' related with Mutate Comment.
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { v4 as uuidv4 } from 'uuid';

const createComment = (parent, args, { db }, info) => {
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
};

const deleteComment = (parent, args, { db }, info) => {
  // author: User! post: Post!
  const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);

  if (commentIndex === -1) {
    throw new Error('Comment not found');
  }

  const deletedComments = db.comments.splice(commentIndex, 1);

  return deletedComments[0];
};

const updateComment = (parent, args, { db }, info) => {
  const { id, data } = args;
  const comment = db.comments.find((comment) => comment.id === id);

  if(!comment) {
    throw new Error('Comment not found!');
  }

  if (typeof data.text === 'string') {
    comment.text = data.text;
  }

  return comment;
};

export {
  createComment,
  deleteComment,
  updateComment
}