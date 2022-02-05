/**
 * file:
 * description:
 * date: 02/05/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const commentQueries = {
  comments:  (parent, args, { db }, info) => {
    return db.comments;
  },
};

export default commentQueries;