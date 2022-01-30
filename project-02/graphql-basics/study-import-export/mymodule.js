const message = 'Some message from myModule.js';

const name = 'Glaucia';

const location = 'Rio de Janeiro';

const getGreeting = (name) => {
  return `Welcome to the course ${name}`;
}

export { message, name, getGreeting, location as default }