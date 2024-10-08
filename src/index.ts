import User from './models/User';
import UserEdit from './views/UserEdit';

const user = User.buildUser({ name: 'myName', age: 20 });

const root = document.getElementById('root') as Element;

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('No root element found!');
}
