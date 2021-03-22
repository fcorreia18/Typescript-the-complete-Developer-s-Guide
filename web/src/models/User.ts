import { Model } from "./Model";
import { Eventing } from './Eventing';
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";
export interface UserProps {
    id?: number;
    age?: number;
    name?: string;
}
const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps>{

    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps): User => User.buildUser(json)
        );
    }

    public setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }

}