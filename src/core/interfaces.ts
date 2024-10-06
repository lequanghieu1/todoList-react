import { Dispatch } from 'react'
export interface ITodo {
    id: number
    title: string
    level: number
    completed: boolean
}

export interface ITodoState {
    todos: ITodo[]
    loading: boolean
    error: string | null
    filter: string | null
}

export enum TodoActionTypes {
    FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
    ADD_TODO = 'ADD_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    SEARCH_TODO = 'SEARCH_TODO',
    FILTER_TODO = 'FILTER_TODO',
    SORT_TODO = 'SORT_TODO'
}

export interface FetchTodosRequestAction {
    type: typeof TodoActionTypes.FETCH_TODOS_REQUEST
}

export interface FetchTodosSuccessAction {
    type: typeof TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: ITodo[]
}

export interface FetchTodosFailureAction {
    type: typeof TodoActionTypes.FETCH_TODOS_FAILURE
    payload: string
}

export interface AddTodoAction {
    type: typeof TodoActionTypes.ADD_TODO
    payload: ITodo
}

export interface UpdateTodoAction {
    type: typeof TodoActionTypes.UPDATE_TODO
    payload: ITodo
}

export interface DeleteTodoAction {
    type: typeof TodoActionTypes.DELETE_TODO
    payload: number
}

export interface SearchTodoAction {
    type: typeof TodoActionTypes.SEARCH_TODO
    payload: string
}

export interface FilterTodoAction {
    type: typeof TodoActionTypes.FILTER_TODO
    payload: string
}

export interface SortTodoAction {
    type: typeof TodoActionTypes.SORT_TODO
    payload: number
}

export type TodoAction =
    | FetchTodosRequestAction
    | FetchTodosSuccessAction
    | FetchTodosFailureAction
    | AddTodoAction
    | UpdateTodoAction
    | DeleteTodoAction
    | SearchTodoAction
    | FilterTodoAction
    | SortTodoAction

export interface Level {
    id: number
    name: string
    value: number
}

export interface AddData {
    title: string
    level: number
}

export interface SortBy {
    id: number
    name: string
    value: number
}

export interface ApiParams {
    url: string
    dispatch: Dispatch<TodoAction>
    method: string
    headers?: {
        'Content-Type': 'application/json'
    }
    body?: string
}
