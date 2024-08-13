class Attributes<T extends object> {
  constructor(public data: T) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

export default Attributes;
