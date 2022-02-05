/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/post-resolver/Post.js
 * description: file responsible for the 'Post' resolver.
 * date: 02/04/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Post = {
  author(parent, args, { db }, info) {
    //==> Relationship btw User -> Post
    return db.users.find((user => user.id === parent.author));
  },
  comments(parent, args, { db }, info) {
    //==> Relationship btw Comment -> Post
    return db.comments.filter((comment => comment.post === parent.id));
  }
};

export { Post as default };