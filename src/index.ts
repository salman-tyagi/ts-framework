import User from './models/User';

const user = new User({ name: 'Spider Man', age: 20 });

user.on('change', () => {});
user.on('click', () => {});
user.on('change', () => {});
user.on('randomEvent', () => {});

console.log(user);
