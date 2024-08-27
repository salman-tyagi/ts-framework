import User from '../models/User';

class UserForm {
  

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

  
}

export default UserForm;
