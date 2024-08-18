import axios, { AxiosResponse } from 'axios';

import User, { UserProps } from './User';
import Eventing from './Eventing';

class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public BASE_API: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.BASE_API).then((res: AxiosResponse) => {
      res.data.forEach((user: UserProps): void => {
        this.models.push(User.buildUser(user));
      });
    });

    this.trigger('change');
  }
}

export default Collection;
