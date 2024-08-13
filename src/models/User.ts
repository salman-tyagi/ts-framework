import Eventing from './Eventing';
import Sync from './Sync';

const API_URL: string = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(API_URL);

  
}

export default User;
