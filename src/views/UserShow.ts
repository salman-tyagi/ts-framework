import View from './View';
import User, { UserProps } from '../models/User';

class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
          <h1>User Details</h1>
          <p>Name: ${this.model.get('name')}</p>
          <p>Age: ${this.model.get('age')}</p>
        </div>
      `;
  }
}

export default UserShow;
