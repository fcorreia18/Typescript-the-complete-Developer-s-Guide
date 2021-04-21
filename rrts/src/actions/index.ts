import axios from 'axios';
import { Dispatch } from "redux";

import { ActionTypes } from "./types";

interface Todo {
    id: number,
    title: string,
    completed: boolean
}
interface Action {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
}
const url = 'https://jsonplaceholder.typecode.com/todos'
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);
        dispatch<Action>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}