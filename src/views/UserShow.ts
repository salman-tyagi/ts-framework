import View from './View';
import User, { UserProps } from '../models/User';

class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <h1>User Detail</h1>
        <p>Name: ${this.model.get('name')}</p>
        <p>Age: ${this.model.get('age')}</p>
      `;
  }
}

export default UserShow;
