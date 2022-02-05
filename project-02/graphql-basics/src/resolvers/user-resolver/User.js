/* eslint-disable no-unused-vars */
/**
 * file: src/resolvers/user-resolver/User.js
 * description: file responsible for the 'User' resolver.
 * date: 02/04/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const User =  {
  posts(parent, args, { db }, info) {
    //==> Relationship btw Post -> User
    return db.posts.filter((post => post.author === parent.id));
  },
  comments(parent, args, { db }, info) {
    //==> Relationship btw Comment -> User
    return db.comments.filter((comment => comment.author === parent.id));
  }
};

export { User as default };