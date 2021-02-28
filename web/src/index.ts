import { User } from "./models/User";

const user = new User({ id: 1, name: "Francisco", age: 23 });
const name = user.get('name');
console.log(user, name);