import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(update: T): void;
}

interface Event {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

class Model {}

export default Model;
