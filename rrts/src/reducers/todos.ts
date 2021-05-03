import { FetchTodosAction, Todo } from '../actions/index'
import { ActionType } from '../actions/types'
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
    switch (action.type) {
        case ActionType.fetchTodos:
            return action.payload;
        default:
            return state;
    }
}