import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/todos/1"

interface TODO {
    id: number;
    title: string;
    completed: boolean;
}
const getTodos = async () => {
    const result = await axios.get(url);
    const { id, title, completed } = result.data as TODO;
    logInformation(id, title, completed)

}
getTodos();

const logInformation = (id: number, title: string, completed: boolean) => {
    return console.log(`This todo has a id ${id} a nice title has ${title} and his state is ${completed}`);
}
