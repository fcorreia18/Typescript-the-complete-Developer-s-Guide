import { User } from "./models/User";

const user = new User({ id: 1, name: "Francisco", age: 23 });
user.on('change', () => console.log("User was updated"));
user.set({ name: "Francisco Correia" });