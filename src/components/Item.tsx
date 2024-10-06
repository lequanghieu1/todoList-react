import { useState, FC } from 'react'
import { ITodo } from '../core/interfaces'
import { levels } from '../mocdata/data'
import EditItem from './EditItem'

const Item: FC<{
    todo: ITodo
    onChange: (todo: ITodo) => void
    onDelete: (id: number) => void
}> = ({ todo, onChange, onDelete }): JSX.Element => {
    const [editing, setEdit] = useState(false)
    const [currentTodo, setTodo] = useState(todo)
    const { id, title, level } = currentTodo

    const levelName: string | JSX.Element | undefined = levels
        .filter((l) => {
            return l.value == level
        })
        .pop()?.name

    if (editing) {
        return <EditItem todo={currentTodo} onChange={onChange} setEdit={setEdit} setTodo={setTodo} />
    }
    const classTd =
        'border-b border-slate-100 text-slate-500 dark:border-slate-600 pl-8 text-slate-400 dark:text-slate-400  p-2'
    const lineThrough = currentTodo.completed == true ? ' line-through' : ''

    return (
        <>
            <td className={classTd + ' text-left'}>
                <input
                    type='checkbox'
                    className='cursor-pointer enabled:hover:border-gray-400 disabled:opacity-75'
                    defaultChecked={currentTodo.completed}
                    onChange={(e) => {
                        const newTodo: ITodo = {
                            ...currentTodo,
                            completed: e.target.checked,
                        }
                        onChange(newTodo)
                        setTodo(newTodo)
                    }}
                />
            </td>
            <td className={classTd + ' text-left' + lineThrough}>{id}</td>
            <td className={classTd + ' text-left' + lineThrough}>{title}</td>
            <td className={classTd + ' text-left' + lineThrough}>{levelName}</td>
            <td className={classTd + ' text-center'}>
                <button
                    onClick={() => setEdit(true)}
                    className='px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm bg-yellow-500'
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(id)}
                    className='px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm bg-red-500 ml-[3px]'
                >
                    Delete
                </button>
            </td>
        </>
    )
}

export default Item
