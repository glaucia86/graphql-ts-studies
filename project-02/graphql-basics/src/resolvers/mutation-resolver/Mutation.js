/**
 * file: src/resolvers/mutation-resolver/Mutation.js
 * description: file responsible for the 'Mutation' resolver.
 * date: 02/04/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { createComment, deleteComment, updateComment } from './mutate-comment';
import { createUser, deleteUser, updateUser } from './mutate-user';
import { createPost, updatePost, deletePost } from './mutate-post';

const Mutation = {
  createUser,
  deleteUser,
  updateUser,

  createPost,
  updatePost,
  deletePost,

  createComment,
  deleteComment,
  updateComment
};

export { Mutation as default };