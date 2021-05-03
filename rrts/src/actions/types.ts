import { FetchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionType {
    fetchTodos,
    deleteTodos
}

export type Action = FetchTodosAction | DeleteTodosAction;