import axios, { AxiosResponse } from 'axios';

import Eventing from './Eventing';

class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public BASE_API: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.BASE_API).then((res: AxiosResponse) => {
      res.data.forEach((user: K): void => {
        this.models.push(this.deserialize(user));
      });
    });

    this.trigger('change');
  }
}

export default Collection;
