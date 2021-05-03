import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from "./types";


export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionType.fetchTodos,
    payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos';
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosAction>({
            type: ActionType.fetchTodos,
            payload: response.data
        })
    }
}
