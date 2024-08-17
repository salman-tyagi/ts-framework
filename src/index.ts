import User from './models/User';

const user = new User({ name: 'superName', age: 40 });

user.on('save', () => {
  console.log(user);
});

// user.save();
