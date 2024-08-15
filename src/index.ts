import User from './models/User';

const user = new User({ name: 'myName', age: 2 });

user.on('click', () => console.log('on click event'));
user.trigger('click');
