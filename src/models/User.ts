import axios, { AxiosResponse } from 'axios';
import Eventing from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
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
      axios.post('http://localhost:3000/users', this.data);
    } else {
      axios.patch(`http://localhost:3000/users/${id}`, this.data);
    }
  }
}

export default User;
