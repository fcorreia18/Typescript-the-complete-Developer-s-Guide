import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserEdit extends View<User, UserProps>{

    public regionsMap(): { [key: string]: string } {
        return {
            userShow: '.user_show',
            userForm: '.user_form',
        }
    }
    public template(): string {
        return `
        <div>
        <div class="user_show"></div>
        <div class="user_form"></div>
        </div>
        `;
    }


}