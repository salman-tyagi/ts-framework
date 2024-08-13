import { UserProps } from './User';

class Attributes<T extends object> {
  constructor(public data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

export default Attributes;

const attrs = new Attributes<UserProps>({ name: 'myName', age: 20 });

const id = attrs.get('id');
const name = attrs.get('name');
const age = attrs.get('age');
