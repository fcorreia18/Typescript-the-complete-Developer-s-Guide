import { Todo, ActionType, Action } from '../actions/index'
export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionType.fetchTodos:
            return action.payload;
        case: ActionType.deleteTodos:
            return state.filter((todos: Todo[]): void => {

            });
        default:
            return state;
    }
}
