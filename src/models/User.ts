import Eventing from './Eventing';
import Sync from './Sync';
import Attributes from './Attributes';
import { AxiosResponse } from 'axios';

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

  set(update: UserProps): void {
    this.attrs.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (!id) {
      throw Error('Provide id to get user details');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attrs.getAll())
      .then((res: AxiosResponse): void => {
        this.attrs.set(res.data);
        this.trigger('save');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default User;
