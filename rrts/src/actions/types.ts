import { FetchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionType {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteTodosAction;