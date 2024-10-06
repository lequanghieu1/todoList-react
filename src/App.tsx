/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useReducer, useEffect } from 'react'
import './App.css'
import Title from './components/Title'
import Search from './components/Search'
import Sort from './components/Sort'
import Form from './components/Form'
import ListItem from './components/ListItem'
import Loading from './components/Loading'
import todoReducer from './core/reducers/todoReducer'
import { ITodoState, ITodo, AddData, TodoActionTypes } from './core/interfaces'
import { UseFetch, CreateTodo } from './core/UseFetch'
import Filter from './components/Filter'
import { searchTodo, deleteTodo, updateTodo, addTodo, filterTodo, sortTodoAction } from './core/actions/todoActions'

const initialState: ITodoState = {
    todos: [],
    loading: false,
    error: null,
    filter: 'all',
}

const App = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const todos = state.todos
    const handleAddTask = ({ title, level }: AddData): void => {
        CreateTodo({
            url: 'todolist/todos',
            method: 'POST',
            dispatch: dispatch,
            body: JSON.stringify({ title, level, completed: false }),
        })
            .then((todo: ITodo) => {
                dispatch(addTodo(todo))
            })
            .catch(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_FAILURE,
                    payload: 'Fetch fail data',
                })
            })
    }

    const handleChangeTask = (todo: ITodo) => {
        UseFetch({
            url: 'todolist/todos/' + String(todo.id),
            method: 'PUT',
            dispatch: dispatch,
            body: JSON.stringify(todo),
        })
            .then(() => {
                dispatch(
                    updateTodo({
                        ...todo,
                        completed: todo.completed,
                    })
                )
            })
            .catch(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_FAILURE,
                    payload: 'Fetch fail data',
                })
            })
    }

    const handleDeleteTodo = (id: number) => {
        UseFetch({
            url: 'todolist/todos/' + String(id),
            method: 'DELETE',
            dispatch: dispatch,
        })
            .then(() => {
                dispatch(deleteTodo(id))
            })
            .catch(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_FAILURE,
                    payload: 'Fetch fail data',
                })
            })
    }

    const handleSearchTodo = (title: string) => {
        dispatch(searchTodo(title))
    }

    const handleFilter = (filter: string) => {
        UseFetch({
            url: 'todolist/todos',
            method: 'GET',
            dispatch: dispatch,
        })
            .then((todos) => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                    payload: todos,
                })
                dispatch(filterTodo(filter))
            })
            .catch(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_FAILURE,
                    payload: 'Fetch fail data',
                })
            })
    }

    const handleFetchListTodo = (): void => {
        UseFetch({ url: 'todolist/todos', method: 'GET', dispatch: dispatch })
            .then((todos: ITodo[]) => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                    payload: todos,
                })
            })
            .catch(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_FAILURE,
                    payload: 'Fetch fail data',
                })
            })
    }
    const handelSort = (type: number): void => {
        dispatch(sortTodoAction(type))
    }

    useEffect(() => {
        handleFetchListTodo()
    }, [])

    return (
        <>
            <div className='container mx-auto border p-4 rounded-xl'>
                <Title />
                <div className='grid mb-8 mt-8 border grid-grid-cols-2 grid-flow-col gap-2 font-mono text-sm rounded-md'>
                    <div className='p-4 grid grid-flow-col'>
                        <Search searchText={handleSearchTodo} reloadData={handleFetchListTodo} />
                        <Sort handelSort={handelSort} />
                    </div>
                    <div className='p-4 grid-grid-rows-2 grid-flow-col'>
                        <div className='mb-[5px]'>
                            <button className='w-full rounded-md font-semibold text-sm text-white shadow-sm p-2.5 bg-blue-400 text-center'>
                                Add item
                            </button>
                        </div>
                        <div className='flex flex-row'>
                            <Form handleAddTask={handleAddTask} />
                        </div>
                    </div>
                </div>
                <Filter setFilter={handleFilter} />
                <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
                    <div className='shadow-sm overflow-hidden'>
                        <ListItem todos={todos} onChange={handleChangeTask} onDelete={handleDeleteTodo} />
                    </div>
                </div>
            </div>
            <Loading loading={state.loading} />
        </>
    )
}

export default App
