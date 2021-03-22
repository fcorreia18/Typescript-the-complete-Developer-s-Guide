import { User, UserProps } from "../models/User";
import { View } from "./View";
export class UserFrom extends View<User, UserProps> {

    public eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set_age": this.onSetAgeClick,
            "click:.set_name": this.onSetNameClick
        }
    }
    public onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    }
    public onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    public template(): string {
        return `
        <div>
        <h1> User Form</h1>
        <div>User Name:${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <input/> 
        <button class="set_name">Set Name</button>
        <button class="set_age">Set Random Age</button>
        </div>
        `;
    }


}