import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps>{

    public regionsMap(): { [key: string]: string } {
        return {
            userShow: '.user_show',
            userForm: '.user_form',
        }
    }
    public onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();

    };
    public template(): string {
        return `
        <div>
        <div class="user_show"></div>
        <div class="user_form"></div>
        </div>
        `;
    }


}