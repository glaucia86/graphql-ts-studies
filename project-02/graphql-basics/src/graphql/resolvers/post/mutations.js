/**
 * file:
 * description:
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

import { v4 as uuidv4 } from 'uuid';

const postMutations = {
  createPost: (parent, args, { db }, info) => {
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

  updatePost: (parent, args, { db }, info) => {
    const { id, data } = args;
    const post = db.posts.find((post) => post.id === id);

    if(!post) {
      throw new Error('Post not found');
    }

    if (typeof data.title === 'string') {
      post.title = data.title
    }

    if (typeof data.body === 'string') {
      post.body = data.body
    }

    if (typeof data.published === 'boolean') {
      post.published = data.published
    }

    return post;
  },

  deletePost: (parent, args, { db }, info) => {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);

    if (postIndex === -1) {
      throw new Error('Post not found');
    }

    const deletedPosts = db.posts.splice(postIndex, 1);

    db.comments = db.comments.filter((comment) => comment.post !== args.id)

    return deletedPosts[0];
  },
};

export default postMutations;