import { User, UserProps } from "../models/User";
import { View } from "./View";
export class UserFrom extends View<User, UserProps> {

    public eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set_age": this.onSetAgeClick,
            "click:.set_name": this.onSetNameClick,
            "click:.save_model": this.onSaveClick
        }
    }
    public onSaveClick = (): void => {
        this.model.save();
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
        <input placeholder="${this.model.get('name')}"/> 
        <button class="set_name">Set Name</button>
        <button class="set_age">Set Random Age</button>
        <button class="save_model">Save Data</button>
        </div>
        `;
    }


}