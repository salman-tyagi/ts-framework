import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(data: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Event {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Event,
    private sync: Sync<T>
  ) {}

  //   get on() {
  //     return this.events.on;
  //   }
  on = this.events.on;

  //   get trigger() {
  //     return this.events.trigger;
  //   }
  trigger = this.events.trigger;

  get get() {
    return this.attributes.get;
  }

  set(data: T): void {
    this.attributes.set(data);
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
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.attributes.set(res.data);
        this.trigger('save');
      })
      .catch((err: AxiosResponse) => {
        console.log(err);
      });
  }
}

export default Model;
