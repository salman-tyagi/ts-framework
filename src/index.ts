import User from './models/User';

const user = new User({ name: 'Captain America', age: 34 });

user.events.on('change', () => console.log('change triggered'));
user.events.trigger('change');

console.log(user);
