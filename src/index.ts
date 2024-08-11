import User from './models/User';

const user = new User({ id: 3, name: 'Captain America', age: 34 });
user.save();

