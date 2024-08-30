import User, { UserProps } from '../models/User';
import View from './View';

class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  template(): string {
    return `
      <div class="user-show"></div>
      <div class="user-form"></div>
    `;
  }
}

export default UserEdit;
