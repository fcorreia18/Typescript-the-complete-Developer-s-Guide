import { UserFrom } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Francisco usuário", age: 22 })
const root = document.getElementById("root");
if (root) {
    const form = new UserFrom(root, user);
    form.render()
} else {
    throw new Error("Root Element not found");
}