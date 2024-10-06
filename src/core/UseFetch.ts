import { ITodo, TodoActionTypes, ApiParams } from './interfaces'
const baseUrl = 'https://64bf9bf70d8e251fd1111c24.mockapi.io/api/'

export const UseFetch = async ({ url, dispatch, method = 'GET', body }: ApiParams): Promise<ITodo[]> => {
    const response = await fetch(baseUrl + url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body,
    })
    dispatch({
        type: TodoActionTypes.FETCH_TODOS_REQUEST
    })

    return (await response.json()) as ITodo[]
}

export const CreateTodo = async ({ url, dispatch, method = 'POST', body }: ApiParams): Promise<ITodo> => {
    const response = await fetch(baseUrl + url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body,
    })
    dispatch({
        type: TodoActionTypes.FETCH_TODOS_REQUEST
    })

    return (await response.json()) as ITodo
}
