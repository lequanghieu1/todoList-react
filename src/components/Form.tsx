import { useState, FC } from 'react'
import { levels } from '../mocdata/data'
import { Level, AddData } from '~/core/interfaces'

const Form: FC<{
    handleAddTask: ({ title, level }: AddData) => void
}> = ({ handleAddTask }) => {
    const [title, setTitle] = useState('')
    const [level, setLevel] = useState(3)

    return (
        <form>
            <div className='flex flex-row'>
                <input
                    className='w-3/5 rounded-md mr-[3px] placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                    type='text'
                    placeholder='Item name'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <select
                    defaultValue={level}
                    onChange={(e) => {
                        setLevel(Number(e.target.value))
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    {levels.map((level: Level) => {
                        return (
                            <option key={level.id} value={level.value}>
                                {level.name}
                            </option>
                        )
                    })}
                </select>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        const newTodo: AddData = {
                            title: title,
                            level: level,
                        }
                        if (!title) {
                            alert('Please enter a title')
                            return
                        }
                        handleAddTask(newTodo)
                    }}
                    className='ml-1 rounded-md font-semibold text-sm text-white shadow-sm p-2 bg-blue-400 text-center'
                >
                    Submit
                </button>
                <button
                    type='button'
                    onClick={() => setTitle('')}
                    className='ml-1 rounded-md font-semibold text-sm text-white shadow-sm p-2 bg-blue-400 text-center'
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Form
