import {
    SearchTodoAction,
    AddTodoAction,
    DeleteTodoAction,
    ITodo,
    TodoActionTypes,
    UpdateTodoAction,
    FilterTodoAction,
    SortTodoAction,
} from '../interfaces'

export const addTodo = (todo: ITodo): AddTodoAction => {
    return {
        type: TodoActionTypes.ADD_TODO,
        payload: todo,
    }
}

export const updateTodo = (todo: ITodo): UpdateTodoAction => {
    return {
        type: TodoActionTypes.UPDATE_TODO,
        payload: todo,
    }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: TodoActionTypes.DELETE_TODO,
        payload: id,
    }
}

export const searchTodo = (title: string): SearchTodoAction => {
    return {
        type: TodoActionTypes.SEARCH_TODO,
        payload: title,
    }
}

export const filterTodo = (filter: string): FilterTodoAction => {
    return {
        type: TodoActionTypes.FILTER_TODO,
        payload: filter,
    }
}

export const sortTodoAction = (type: number): SortTodoAction => {
    return {
        type: TodoActionTypes.SORT_TODO,
        payload: type,
    }
}
