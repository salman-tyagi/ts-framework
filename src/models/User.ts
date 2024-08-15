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
}

export default User;

class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('firstName', 'lastName');
console.log(person.fullName);
