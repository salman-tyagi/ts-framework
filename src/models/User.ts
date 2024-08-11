interface UserProps {
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
    // this.events[eventName]  = this.events[eventName] || [];
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  }
}

export default User;
