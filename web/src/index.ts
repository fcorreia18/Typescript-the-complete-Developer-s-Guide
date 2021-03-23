import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const user = new Collection('http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    })


user.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList(root, user).render();
    }
});
user.fetch();