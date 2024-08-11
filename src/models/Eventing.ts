// Type alias as a TYPE, to make understand programmers
type Callback = () => void;

class Eventing {
  events: { [event: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    // Initially there is no any value in the event property of events, we need to set any truthy value [], so could not get any error or undefined
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
}

export default Eventing;
