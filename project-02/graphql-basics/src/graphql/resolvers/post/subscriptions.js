/* eslint-disable no-unused-vars */
/**
 * file: src/graphql/resolvers/post/subscriptions.js
 * description: file responsible for dealing with Subscription on type 'Post'
 * date: 02/09/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const postSubscriptions = {
  count: {
    subscribe: (parent, args, { pubsub }, info) => {
      let count = 0;

      setInterval(() => {
        count++;
        pubsub.publish('count', {
          count,
        });
      }, 1000);

      return pubsub.asyncIterator('count');
    },
  },

  post: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.asyncIterator('post');
    },
  },
};

export default postSubscriptions;
