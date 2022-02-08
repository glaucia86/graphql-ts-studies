/**
 * file: src/data/db.js
 * description: file responsible to simulate a database (fake database)
 * date: 02/04/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const users = [{
  id: '1',
  name: 'Glaucia Lemos',
  email: 'glaucia@example.com',
  age: 35
}, {
  id: '2',
  name: 'Jurema Lemos',
  email: 'jurema@example.com',
}, {
  id: '3',
  name: 'Prince',
  email: 'prince@example.com',
}];

const posts = [{
  id: '1',
  title: 'Learn JavaScript',
  body: 'Become a Ninja in JavaScript in few months',
  published: true,
  author: '1'
}, {
  id: '2',
  title: 'Learn TypeScript',
  body: 'Become a Ninja in TypeScript in few months',
  published: true,
  author: '3'
}, {
  id: '3',
  title: 'Learn Node.Js',
  body: 'Become a Ninja in Node in few months',
  published: false,
  author: '2'
}];

const comments = [{
  id: '1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  author: '1',
  post: '3'
}, {
  id: '2',
  text: 'Integer efficitur sit amet justo ut viverra. Donec id sem nisi.',
  author: '1',
  post: '3'
}, {
  id: '3',
  text: 'Aliquam condimentum diam lectus.',
  author: '3',
  post: '2'
}, {
  id: '4',
  text: 'Nulla consectetur finibus lobortis. Praesent malesuada nibh eu congue faucibus.',
  author: '2',
  post: '1'
}]

const db = {
  users,
  posts,
  comments
}

export { db as default }