import User from '../models/User';

class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap() {
    return {
      'click:.set-age': this.setAgeOnClick,
    };
  }

  setAgeOnClick = (): void => {
    this.model.setRandomAge();
    this.render();
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
        <input />
        <button>Click me</button>
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
