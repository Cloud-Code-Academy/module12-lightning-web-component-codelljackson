import { LightningElement } from 'lwc';

export default class GreetUser extends LightningElement {
    yourName = '';
    greetMsg = '';

    handleChange(event) {
        this.yourName = event.target.value;
    }

    handleClick() {
        this.greetMsg = `Hello, ${this.yourName}! 👋`;
    }
}
