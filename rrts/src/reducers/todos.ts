import { Todo, ActionType, Action } from '../actions/index'
export const todosReducer = (state: Todo[] = [], action: Action) => {

    switch (action.type) {
        case ActionType.fetchTodos:
            return action.payload;
        case ActionType.deleteTodo:
            return state.filter((todo: Todo) => {
                return todo.id !== action.payload
            });
        default:
            return state;
    }
}

