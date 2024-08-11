import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Type alias as a TYPE, to make understand programmers
type Callback = () => void;

class User {
  events: { [event: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // Initially there is no any value in the events object, we need to set any truthy value [], so could not get any error or undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const callbacks = this.events[eventName];

    // Check, if callbacks exists and there is any callback inside callbacks array, if not, just return out the trigger function
    if (!callbacks || !callbacks.length) return;

    // If there are callbacks then simply executive them one by one
    callbacks.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse) => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (!id) {
      axios
        .post('http://localhost:3000/users', this.data)
        .then((res: AxiosResponse) => {
          this.set(res.data);
        });
    } else {
      axios
        .patch(`http://localhost:3000/users/${id}`, this.data)
        .then((res: AxiosResponse) => {
          this.set(res.data);
        });
    }
  }
}

export default User;
