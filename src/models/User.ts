import ApiSync from './ApiSync';
import Attributes from './Attributes';
import Eventing from './Eventing';
import Model from './Model';

const API_URL: string = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(API_URL)
    );
  }
}

export default User;
