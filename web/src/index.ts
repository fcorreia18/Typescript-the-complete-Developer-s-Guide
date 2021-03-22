import { UserFrom } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Francisco usuário", age: 22 })
const form = new UserFrom(document.getElementById("root"), user);

form.render()