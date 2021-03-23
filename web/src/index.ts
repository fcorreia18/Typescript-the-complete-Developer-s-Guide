import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "Francisco usuário", age: 22 })
const root = document.getElementById("root");
if (root) {
    const form = new UserEdit(root, user);
    form.render()
    console.log(form);
} else {
    throw new Error("Root Element not found");
}