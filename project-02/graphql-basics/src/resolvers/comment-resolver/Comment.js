/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/comment-resolver/Comment.js
 * description: file responsible for the 'Comment' resolver.
 * date: 02/04/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Comment = {
  //==> Relationship btw User -> Comment
  author(parent, args, { db }, info) {
    return db.users.find((user => user.id === parent.author));
  },
  post(parent, args, { db }, info) {
    //==> Relationship btw Post -> Comment
    return db.posts.find((post => post.id === parent.post));
  }
};

export { Comment as default };