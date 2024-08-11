import User from './models/User';

const user = new User({ name: 'Spider Man', age: 20 });

user.on('change', () => {
  console.log('Change #1 trigged!');
});

user.on('click', () => {
  console.log('Click #1 trigged!');
});

user.on('change', () => {
  console.log('Change #2 triggered!');
});

user.on('save', () => {
  console.log('Save was triggered!');
});

// No error on trigger any random unregistered event
user.trigger('dsjhfkjds');
