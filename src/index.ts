import User from './models/User';

const user = new User({ name: 'myName', age: 20 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('A change was triggered. We need to update');
});

user.set({ name: 'New name' });
