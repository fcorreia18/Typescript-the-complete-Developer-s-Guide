import { fetchTodosAction, Todo } from '../actions/index'
import { ActionType } from '../actions/types'
export const todos = (state: Todo[] = [], action: fetchTodosAction) => {
    switch (action.type) {
        case ActionType.fetchTodos:
            return action.payload;

        default:
            return state;
    }
}