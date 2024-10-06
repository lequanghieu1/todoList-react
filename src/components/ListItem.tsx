import React from 'react'
import Item from './Item'
import { ITodo } from '../core/interfaces'

const ListItem: React.FC<{
    todos: ITodo[]
    onChange: (todo: ITodo) => void
    onDelete: (id: number) => void
}> = ({ todos, onChange, onDelete }): JSX.Element => {
    return (
        <>
            <div className='pl-8 p-[5px] bg-lime-100 text-left font-semibold text-slate-500 dark:text-slate-500 dark:text-slate-200'>
                List item
            </div>
            <table className='border-collapse table-auto w-full text-sm'>
                <thead>
                    <tr>
                        <th className='w-[5px] border-b dark:border-slate-600 p-3 pl-8 text-slate-400 dark:text-slate-200 text-left'>
                            #
                        </th>
                        <th className='w-[5px] border-b dark:border-slate-600 p-3 pl-8 text-slate-400 dark:text-slate-200 text-left'>
                            Id
                        </th>
                        <th className='w-6/12 border-b dark:border-slate-600 p-3 pl-8 text-slate-400 dark:text-slate-200 text-left'>
                            Title
                        </th>
                        <th className='w-2/12 border-b dark:border-slate-600 p-3 pl-8 text-slate-400 dark:text-slate-200 text-left'>
                            Level
                        </th>
                        <th className='w-3/12 border-b dark:border-slate-600 p-3 pr-8 text-slate-400 dark:text-slate-200 text-center'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white dark:bg-slate-800'>
                    {todos.map((todo: ITodo) => {
                        return (
                            <tr key={todo.id}>
                                <Item todo={todo} onChange={onChange} onDelete={onDelete} />
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListItem
