import { Todo, fetchTodosAction } from "../actions/index";
import { ActionTypes } from "../actions/types";

export const todos = (state: Todo[] = [], action: fetchTodosAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
}