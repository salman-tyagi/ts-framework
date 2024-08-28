import Model from '../models/Model';
import { HasId } from '../models/Model';

abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const events in eventsMap) {
      const [eventName, selector] = events.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[events]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}

export default View;
