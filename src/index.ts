import UserForm from './views/UserForm';
import User from './models/User';

const user = User.buildUser({ name: 'myName', age: 20 });

const root = document.getElementById('root') as Element;

const userForm = new UserForm(root, user);
userForm.render();
