import React, { useState } from 'react'
import { SortBy } from '../core/interfaces'

const Sort: React.FC<{ handelSort: (type: number) => void }> = ({ handelSort }): JSX.Element => {
    const sortBy: SortBy[] = [
        { id: 1, name: 'Name DESC', value: 1 },
        { id: 2, name: 'Name ASC', value: 2 },
    ]
    const getSortName = (value: number) => {
        return sortBy
            .filter((item) => {
                return item.value == value
            })
            .pop()?.name
    }

    const [sortName, setSortName] = useState(1)

    return (
        <div className='border-none sort'>
            <select
                id='sortby'
                onChange={(e) => {
                    setSortName(Number(e.target.value))
                    handelSort(Number(e.target.value))
                }}
                className='bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
                <option value='0'>Sort by</option>
                {sortBy.map((sort) => {
                    const { id, name, value } = sort

                    return (
                        <option key={id} value={value}>
                            {name}
                        </option>
                    )
                })}
            </select>
            <button
                className='ml-1 rounded-md font-semibold text-sm text-white shadow-sm p-2.5 bg-blue-400 text-center w-[90px]'
                type='button'
            >
                {getSortName(sortName)}
            </button>
        </div>
    )
}

export default Sort
