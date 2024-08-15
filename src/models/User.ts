import Eventing from './Eventing';
import Sync from './Sync';
import Attributes from './Attributes';

const API_URL: string = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(API_URL);
  public attrs: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attrs = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }
}

export default User;
