import { FC } from 'react'
import { ITodo, Level } from '../core/interfaces'
import { levels } from '../mocdata/data'

const EditItem: FC<{
    todo: ITodo
    onChange: (todo: ITodo) => void
    setEdit: (flag: boolean) => void
    setTodo: (todo: ITodo) => void
}> = ({ todo, onChange, setEdit, setTodo }): JSX.Element => {
    const { id, title, level, completed } = todo
    const classTd =
        'border-b border-slate-100 text-slate-500 dark:border-slate-600 pl-8 text-slate-400 dark:text-slate-400'

    return (
        <>
            <td className={classTd + ' text-left'}>
                <input
                    type='checkbox'
                    className='cursor-pointer enabled:hover:border-gray-400 disabled:opacity-75'
                    defaultChecked={completed}
                    onChange={(e) => {
                        const newTodo: ITodo = {
                            ...todo,
                            completed: e.target.checked,
                        }
                        onChange(newTodo)
                        setTodo(newTodo)
                    }}
                />
            </td>
            <td className={classTd + ' text-left'}>{id}</td>
            <td className={classTd + ' text-left p-2'}>
                <input
                    className='placeholder:italic border p-2 placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                    type='text'
                    name='task_name'
                    value={title}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        })
                    }}
                />
            </td>
            <td className={classTd + ' text-left p-2'}>
                <select
                    defaultValue={level}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            level: Number(e.target.value),
                        })
                    }}
                    className='bg-gray-50 border py-2 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option>----</option>
                    {levels.map((level: Level) => {
                        return (
                            <option key={level.id} value={level.value}>
                                {level.name}
                            </option>
                        )
                    })}
                </select>
            </td>
            <td className={classTd + ' text-center'}>
                <button
                    onClick={() => {
                        const newTodo = {
                            ...todo,
                            title: todo.title,
                        }
                        onChange(newTodo)
                        setEdit(false)
                    }}
                    className='px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm bg-green-400 mr-[3px]'
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        setEdit(false)
                    }}
                    className='px-4 py-2 font-semibold text-sm border text-black rounded-md shadow-sm bg-white'
                >
                    Cancel
                </button>
            </td>
        </>
    )
}

export default EditItem
