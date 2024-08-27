import User from '../models/User';

class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.setAgeOnClick,
      'click:.set-name': this.setNameOnClick,
    };
  }

  setAgeOnClick = (): void => {
    this.model.setRandomAge();
  };

  setNameOnClick = (): void => {
    const inputElement = this.parent.querySelector('input');
    const name = inputElement?.value;

    this.model.set({ name });
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const events in eventsMap) {
      const [eventName, selector] = events.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[events]);
      });
    }
  }

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <p>Name: ${this.model.get('name')}</p>
        <p>Age: ${this.model.get('age')}</p>
        <input type='text' />
        <button class='set-name'>Update Name</button>
        <button class='set-age'>Set random age</button>
      </div>
    `;
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}

export default UserForm;
