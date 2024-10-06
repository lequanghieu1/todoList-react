import { ITodo, ITodoState, TodoAction, TodoActionTypes } from '../interfaces'

const todoReducer = (state: ITodoState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: null,
            }

        case TodoActionTypes.FETCH_TODOS_FAILURE:
            return {
                ...state,
                todos: [],
                loading: false,
                error: action.payload,
            }

        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload],
            }

        case TodoActionTypes.UPDATE_TODO:
            return {
                ...state,
                loading: false,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            ...action.payload,
                        }
                    }
                    return todo
                }),
            }
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                loading: false,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            }

        case TodoActionTypes.SEARCH_TODO: {
            return {
                ...state,
                loading: false,
                todos: state.todos.filter((todo: ITodo) => todo.title.match(action.payload)),
            }
        }

        case TodoActionTypes.FILTER_TODO: {
            return {
                ...state,
                loading: false,
                todos: state.todos.filter((todo: ITodo) => {
                    switch (action.payload) {
                        case 'all':
                            return true
                        case 'active':
                            return todo.completed === false
                        case 'completed':
                            return todo.completed === true

                        default:
                            return true
                    }
                }),
            }
        }

        case TodoActionTypes.SORT_TODO: {
            return {
                ...state,
                loading: false,
                todos: state.todos.sort((todoA: ITodo, todoB: ITodo) => {
                    if (action.payload == 1) {
                        // desc
                        return todoA.title.localeCompare(todoB.title)
                    }
                    return todoB.title.localeCompare(todoA.title)
                }),
            }
        }

        default:
            return state
    }
}

export default todoReducer
